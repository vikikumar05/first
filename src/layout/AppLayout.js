// src/layout/AppLayout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> {/* This renders the matching child route */}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
