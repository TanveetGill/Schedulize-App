import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="jumbotron">
    <h1 className="display-4">Schedulize App</h1>
    <h5>The best way to schedule your assignments and exams so you are always prepared!</h5>
    <ul className="nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/create" activeClassName="is-active">Create Item</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
