import './Main.scss'
import { Articles } from '../../components/Articles';

import materials from '../../data/materials.json'
import { Parrent } from '../../components/Parrent';

export const Main = () => {
  let name = 'Joe'
  function helper (arg) {
    console.log(arg);
  }
  return (
    <main className="Main">
    <h1>Компонент предок</h1>
      <Parrent man={name} fun={helper} />
<Articles data={materials}/>
    </main>
  )
}
