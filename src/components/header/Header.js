import logo from '../../assets/logo/logo.png';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="kasa-logo" alt="logo" />
      <nav id="navbar">
        <ul id="nav-items">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/A_Propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
