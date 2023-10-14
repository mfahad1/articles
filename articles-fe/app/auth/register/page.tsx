"use client";

import { useState } from 'react';
import { Button, Card as AntCard, Form, Input, Alert } from 'antd'
import styled from 'styled-components';
import { useSWRConfig } from 'swr';
import Link from 'next/link';

import { User, register } from '../api';

const Card = styled(AntCard)`
  width: 30vw;
  margin-top: 5vh;
  padding-top: 3vh;
`;
const AlertContainer = styled.div`
  padding: 1rem;
`

export default function Register() {
  const { mutate } = useSWRConfig();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const onFinish = async (values: User) => {
    try {
      const user = await mutate('/api/user', register(values));
      setError(undefined);
      setSuccess('User added Successfully');
    } catch (err) {
      setError((err as { message: string }).message );
    }
  }

  return (
    <Card title="Register" bordered headStyle={{ fontSize: 30, textAlign: 'center' }}>
      <AlertContainer>
        {error && <Alert message={error} type="error" showIcon />}
        {success && <Alert message={success} type="success" showIcon />}
      </AlertContainer>
      <Form name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
      <Link href="/auth/login">
        <Button type="default" block>
          Goto Login
        </Button>
      </Link>
    </Form>
    </Card>
  )
}
