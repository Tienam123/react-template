/* Default imports */
import React from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';
// Code ...
const Layout = () => {
  const setActive = ({isActive}) => isActive ? 'activeLink' : '';
  return (
      <>
        <header>
          <CustomLink
              to="/">Home</CustomLink>
          <CustomLink
              to="/blog">Blog</CustomLink>
          <CustomLink
              to="/about">About</CustomLink>
        </header>

        <Outlet/>

        <footer>2023</footer>
      </>
  );
};

export default Layout;
