import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="row">
      <header className="col-12 ">
        <nav className=" navbar navbar-expand-md justify-content-between">
        <a href="/" className="text-decoration-none"><h1 className="text-black mx-3 ">Employee Tracker</h1> </a>
       <a href="/add-employees" className="text-decoration-none"> <h3 className="text-black mx-3">Add Employee</h3></a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
