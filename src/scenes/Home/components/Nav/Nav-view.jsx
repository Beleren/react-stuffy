import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Who am i?
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">
            What can i do?
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" activeClassName="active">
            How can i help you?
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
