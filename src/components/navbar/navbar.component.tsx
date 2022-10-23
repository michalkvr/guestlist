import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavbarContainer, NavbarLinks, NavbarLink, NavbarLogo } from './navbar.styles';

const Navbar = () => {
  const [selected, setSelected] = useState('dashboard');
  const location = useLocation();
  console.log(location.pathname);

  const isLocationMatching = (linkTo: string) => {
    return location.pathname.includes(linkTo);
  } 

  return (
    <>
      <NavbarContainer>
        <NavbarLogo />
        <NavbarLinks>
          <NavbarLink className={isLocationMatching('dashboard') ? 'selected' : ''} to='dashboard'>Nástěnka</NavbarLink>
          <NavbarLink className={isLocationMatching('reservations') ? 'selected' : ''} to='reservations'>Rezervace</NavbarLink>
        </NavbarLinks>
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
