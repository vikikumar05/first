// src/layout/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to Our Platform</h1>
      <Link to="/login" className="btn btn-primary m-2">Login</Link>
      <Link to="/signup" className="btn btn-success m-2">Sign Up</Link>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '5px 0',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
};

export default Header;
