import React from 'react';
import Navbar from './components/NavBar';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="nx-layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
