import './Sidebar.scss';
import materials from '../../data/materials.json'

export const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <nav>
        <ul>
          {materials.map((elem,index) => {
            return (
              <li key={index}>
                {elem.title}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
