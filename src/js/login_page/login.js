import React, { useState } from 'react';
import logo from '../../picture/logo.PNG';
import axios from 'axios';
import '../../css/index.scss';
import { setUserSession, urlAPI } from '../utils/API';
import { Form, Input, Button, Checkbox, Col, Row, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function LoginForm(props) {
  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = () => {
    axios.post(
      urlAPI + "public/auth/login", {
      username: username.value,
      password: password.value
    })
      .then(response => {
        console.log(response);
        setUserSession(response.data.Data.Token, response.data.Data.User, response.data.Data.Organizations[0]);
        props.history.push('/');
      });

    setTimeout(function () { //Start the timer
      props.history.push('/');
    }.bind(this), 400)
  }

  return (
    <Row align="middle" style={{ marginTop: "20vh" }}>
      <Col span={8}></Col>
      <Col span={8}>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <img src={logo} />
          </Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form name="normal_login" className="login-form" onFinish={handleLogin} >
              <Card textAlign='right' >
                <Form.Item
                  name="username"
                  {...username}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your E-mail address!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  {...password}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
              </Button>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Card>
            </Form>
          </Col>
        </Row>
      </Col>
      <Col span={8}></Col>
    </Row >
  )
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default LoginForm