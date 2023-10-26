import './Header.css';
import { NavLink } from 'react-router-dom';
function Header(){
    return(
        <div className="Header">
                <h1>React documentation page</h1>
          <ul className='menu-link'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
    );
}

export default Header;