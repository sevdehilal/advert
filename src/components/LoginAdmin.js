import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';  // CSS'i import edin

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const admins = useSelector(state => state.user.admins);

  const onFinish = (values) => {
    const admin = admins.find(
      (admin) => admin.username === values.username && admin.password === values.password
    );

    if (admin) {
      dispatch(loginSuccess({ userInfo: { username: admin.username }, token: admin.token, isAdmin: true }));
      navigate('/create-listing');
    } else {
      alert('Geçersiz giriş bilgileri');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Admin Girişi</h2>
        <Form onFinish={onFinish} className="login-form">
          <Form.Item name="username" rules={[{ required: true, message: 'Lütfen admin kullanıcı adınızı girin!' }]}>
            <Input placeholder="Admin Kullanıcı Adı" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}>
            <Input.Password placeholder="Şifre" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Giriş Yap
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginAdmin;
