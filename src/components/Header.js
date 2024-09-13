import React from 'react';
import { Menu } from 'antd';
import '../styles/Header.css';

const Header = ({ onSelect }) => {
  return (
    <div className="header-container">
      <h2 className="app-title">Job Listings</h2>
      <Menu mode="horizontal" onClick={onSelect} className="header-menu">
        <Menu.Item key="user">User Login</Menu.Item>
        <Menu.Item key="admin">Admin Login</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
