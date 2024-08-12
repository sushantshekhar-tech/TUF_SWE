import React from 'react';

const Navbar = ({ theme, toggleTheme, toggleBannerVisibility, isBannerVisible }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <a className="navbar-brand" href="#">Take You Forward SWE </a>
      <button className="btn btn-outline-secondary ml-auto" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button className="btn btn-outline-info ml-5 " style={{margin:'5px'}} onClick={toggleBannerVisibility}>
        {isBannerVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
    </nav>
  );
};

export default Navbar;
