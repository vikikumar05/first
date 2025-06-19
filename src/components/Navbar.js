import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MyApp</Link>
      
      <div className="d-flex">
        <Link className="nav-link px-3" to="/">Home</Link>
        <Link className="nav-link px-3" to="/login">Login</Link>
        <Link className="nav-link px-3" to="/signup">Signup</Link>
        <Link className="nav-link px-3" to="/dashboard">Dashboard</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
