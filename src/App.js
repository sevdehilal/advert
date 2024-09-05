// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LoginUser from './components/LoginUser';
import LoginAdmin from './components/LoginAdmin';
import Listings from './pages/Listings'; // Güncellenmiş import yolu
import CreateListing from './pages/CreateListing'; // Güncellenmiş import yolu
import './styles/App.css'; // CSS dosyasını import edin

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header className="app-header">
          <div className="logo">Uygulama Adı</div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="login-user">
              <Link to="/login-user">Kullanıcı Girişi</Link>
            </Menu.Item>
            <Menu.Item key="login-admin">
              <Link to="/login-admin">Admin Girişi</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Content className="main-content">
            <Routes>
              <Route path="/" element={<div>Hoşgeldiniz</div>} />
              <Route path="/login-user" element={<LoginUser />} />
              <Route path="/login-admin" element={<LoginAdmin />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/create-listing" element={<CreateListing />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
