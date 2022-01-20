import React, { useState } from "react";
import "./Header.css";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

function Header() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((openMenu) => !openMenu);
  useEffect(() => {
    console.log(isDesktop);
  }, [isDesktop]);

  return (
    <div className="header">
      <img
        className="header__image"
        src={
          isDesktop
            ? "/images/desktop/image-header.jpg"
            : "/images/mobile/image-header.jpg"
        }
        alt="Orange"
      />
     {!openMenu? <div className="header__title">
        <h3>WE ARE CREATIVES</h3>
        <img src="/icons/icon-arrow-down.svg" alt="" />
      </div>
      :null} 
      <div className="header__content">
        <div className="header__logo">
          <h5>sunnyside</h5>
        </div>
        {isDesktop ? (
          <div className="header__nav ">
            <div className="header__navItem">
              <h6>About</h6>
            </div>
            <div className="header__navItem">
              <h6>Services</h6>
            </div>
            <div className="header__navItem">
              <h6>Projects</h6>
            </div>
            <div className="header__navItem header__navItemActive">
              <h6>Contact</h6>
            </div>
          </div>
        ) : (
          <div className="header__hamburger" onClick={toggleMenu}>
           {openMenu? 'x': <img src="/icons/icon-hamburger.svg" alt="hamburger" />} 
          </div>
        )}
    {openMenu ? <div className="header__mobileContainer">
        <div className="header__mobileMenu">
        <div className="header__mobileNavItem">
              <h6>About</h6>
            </div>
            <div className="header__mobileNavItem">
              <h6>Services</h6>
            </div>
            <div className="header__mobileNavItem">
              <h6>Projects</h6>
            </div>
            <div className="header__mobileNavItem header__mobileNavItemActive">
              <h6>Contact</h6>
            </div>
        </div>
        </div>: null} 
        
      </div>
    </div>
  );
}

export default Header;
