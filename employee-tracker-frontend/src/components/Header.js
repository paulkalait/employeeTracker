import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
          <h1 className="text-white mx-3">Employee Tracker</h1>
          <h3 className="text-white mx-3">Add Employee</h3>
        </nav>
      </header>
    </div>
  );
};

export default Header;
