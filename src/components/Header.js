// src/components/Header.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Header className="app-header">
      <div className="logo"></div>
      <Menu theme="dark" mode="horizontal" className="header-menu">
        <Menu.Item key="login-user" onClick={() => navigate('/login-user')}>
          Kullanıcı Girişi
        </Menu.Item>
        <Menu.Item key="login-admin" onClick={() => navigate('/login-admin')}>
          Admin Girişi
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
