import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';
export const Header = () => {
  return (
    <>
      <nav className="NavList">
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/Catalog">
          Catalog
        </NavLink>
        <NavLink className="NavLink" to="/Favorites">
          Favorites
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
