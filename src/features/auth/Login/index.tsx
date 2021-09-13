import { Button, Card, Col, Divider, Form, Input, Row, Switch, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { LoginInterfaceComponent } from 'data/types';
import Logo from 'library/assets/icons/logo.png';
import { passwordRegExp } from 'utils/common';
import { userLogin } from '../authSlice';
import './index.modules.scss';

const { Text } = Typography;

const SignIn: React.FC = ({}) => {
  const [isLoading, setIsLoading] = useState('pending');
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onFinish = (values: LoginInterfaceComponent) => {
    setIsLoading('login');
    dispatch(userLogin(values))
      .then(() => {
        setIsLoading('pending');
      })
      .catch((err) => {
        return err;
      });
  };

  const validateMessages = {
    required: '${label}' + ` ${t('is required!')}`,
    types: {
      email: '${label}' + ` ${t('is not a valid!')}`,
    },
    pattern: {
      mismatch: `${t(
        'Password must contain at least 8 characters, including 2 numbers, 2 normal letters, 2 uppercase letters, 2 special characters',
      )}`,
    },
  };

  return (
    <Card className="card-signin">
      <Row justify="center">
        <Col>
          <img src={Logo} height="60" className="mb-24" />
        </Col>
      </Row>
      <Row justify="center" className="mb-24">
        <Col>
          <Text className="notice">{t('Personal Data Protection Compliance Management')}</Text>
        </Col>
      </Row>
      <Row justify="center">
        <Form
          form={form}
          name="login"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          <Col span="24">
            <Form.Item name="email" label={t('Email')} rules={[{ required: true, type: 'email' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col span="24">
            <Form.Item
              name="password"
              label={t('Password')}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  pattern: passwordRegExp,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Col>

          <Row justify="space-between" align="middle">
            <Col>{t('Remember me')}</Col>
            <Col>
              <Form.Item valuePropName="checked" className="m-0">
                <Switch />
              </Form.Item>
            </Col>
          </Row>

          <Col span="24">
            <Form.Item className="text-center">
              <Link to="/forgot-password">{t('Forgot password')}</Link>
            </Form.Item>
          </Col>

          <Col span="24">
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block loading={isLoading === 'login'}>
                {t('Sign In')}
              </Button>
            </Form.Item>
          </Col>

          <Col span="24">
            <Form.Item>
              <Divider className="signup-link">
                <Link to="/sign-up">{t('Sign Up')}</Link>
              </Divider>
            </Form.Item>
          </Col>
        </Form>
      </Row>
    </Card>
  );
};

export default SignIn;
