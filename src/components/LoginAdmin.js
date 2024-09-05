// src/components/LoginAdmin.js
import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

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
    <Card title="Admin Girişi" className="login-card">
      <Form onFinish={onFinish}>
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
  );
};

export default LoginAdmin;
