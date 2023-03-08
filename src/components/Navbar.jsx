import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import React, { useState } from 'react';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div id="topbar">
      <a href="/books"><h1>Bookstore CMS</h1></a>
      <ul id="buttonsbar">
        <li>
          <Link className={`link ${selectedItem === 0 ? 'active' : ''}`} to="/books" onClick={() => setSelectedItem(0)}>BOOKS</Link>
        </li>
        <li id="itemCenter">
          <Link className={`link ${selectedItem === 1 ? 'active' : ''}`} to="/categories" onClick={() => setSelectedItem(1)}>CATEGORIES</Link>
        </li>
      </ul>
      <button className="icon-button" type="button">
        <BsFillPersonFill className="material-icons primary-color" />
      </button>
    </div>
  );
};

export default Navbar;
