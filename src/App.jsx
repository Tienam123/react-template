import { useEffect, useState } from 'react'
import PostList from './components/PostList/PostList.jsx'
import PostForm from './components/PostForm/PostForm.jsx'
import PostFilter from './components/PostFilter/PostFilter.jsx'
import MyModal from './components/UI/modal/MyModal.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import { usePosts } from './components/hooks/usePosts.jsx'
import PostService from './components/API/PostService.jsx'
import Loader from './components/UI/loader/Loader.jsx'
import { useFetching } from './components/hooks/useFetching.jsx'
import { getPagesCount } from './utils/pages.jsx'

const App = () => {
  // Hooks
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPage,setTotalPages] = useState(0);
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit,page)
    setPosts(response.data)
    console.log(response.headers)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount,limit))
  })
  console.log(totalPage)
  // Functions
  useEffect(() => {
    console.log('USE EFFECT')
    fetchPosts()
  }, [])

  // Создание поста
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  // Удаление поста
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  // Получение постов


  return (<div className="App">
    <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
      Создать пост
    </MyButton>
    <MyModal
      visible={modal}
      setVisible={setModal}
    >
      <PostForm create={createPost}/>
    </MyModal>

    <hr style={{ margin: '15px 0', color: '#fff', border: '0.5px solid teal' }}/>
    <PostFilter filter={filter} setFilter={setFilter}/>
    {postError &&
      <h1>Произошла ошибка ${postError}</h1>
    }
    {isPostsLoading ? <Loader/> : <PostList remove={deletePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>

    }


  </div>)

}

export default App