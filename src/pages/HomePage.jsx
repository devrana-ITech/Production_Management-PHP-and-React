import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <main className="page-content">
      <Outlet/>
        </main> 
        </>
    );
};

export default HomePage;