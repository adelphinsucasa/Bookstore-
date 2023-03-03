import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul id="buttonsbar">
      <li>
        <Link to="/books">BOOKS</Link>
      </li>
      <li id="itemCenter">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
