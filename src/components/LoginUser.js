import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';  // CSS'i import edin

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.user.users);

  const onFinish = (values) => {
    const user = users.find(
      (user) => user.username === values.username && user.password === values.password
    );

    if (user) {
      dispatch(loginSuccess({ userInfo: { username: user.username }, token: user.token, isAdmin: false }));
      navigate('/listings');
    } else {
      alert('Geçersiz giriş bilgileri');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2 className="login-title">Kullanıcı Girişi</h2>
        <Form onFinish={onFinish} className="login-form">
          <Form.Item name="username" rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}>
            <Input placeholder="Kullanıcı Adı" />
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

export default LoginUser;