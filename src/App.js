// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import LoginUser from './components/LoginUser';
import LoginAdmin from './components/LoginAdmin';
import Listings from './pages/Listings';
import CreateListing from './pages/CreateListing';
import { logout, selectIsLoggedIn, selectIsAdmin } from './features/user/userSlice';
import './styles/App.css';

const { Header, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAdmin = useSelector(selectIsAdmin);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Layout>
      <Header className="app-header">
        <div className="logo">Jobsphere</div>
        <Menu theme="dark" mode="horizontal">
          {!isLoggedIn ? (
            <>
              <Menu.Item key="login-user">
                <Link to="/login-user">Kullanıcı Girişi</Link>
              </Menu.Item>
              <Menu.Item key="login-admin">
                <Link to="/login-admin">Admin Girişi</Link>
              </Menu.Item>
            </>
          ) : (
            <Menu.Item key="logout">
              <Button onClick={handleLogout} type="primary">Çıkış Yap</Button>
            </Menu.Item>
          )}
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
  );
};

export default App;
