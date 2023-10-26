import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
        </div>
    );
}

export default Sidebar;