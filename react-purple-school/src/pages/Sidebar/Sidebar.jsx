/* Default imports */
import logo from '../../assets/PersonalJournal.svg';
import {StyledSidebar} from './Sidebar.styled.js';
import PostList from '../../components/PostList/PostList.jsx';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd.jsx';

const Sidebar = ({data}) => {
  return (
      <StyledSidebar>
        <img src={logo}
             alt=""/>
        <ButtonAdd/>
        <PostList data={data}/>
      </StyledSidebar>
  );
};

export default Sidebar;