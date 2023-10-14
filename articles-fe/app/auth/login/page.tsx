"use client";

import { useState } from 'react';
import { Button, Card as AntCard, Form, Input, Alert } from 'antd'
import styled from 'styled-components';
import { User, login } from '../api';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Card = styled(AntCard)`
  width: 30vw;
  margin-top: 5vh;
  padding-top: 3vh;
`
const AlertContainer = styled.div`
  padding: 1rem;
`

export default function Login() {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [error, setError] = useState<string>();
  const onFinish = async (values: User) => {
    try {
      const user = await mutate('/api/user', login(values));
      setError(undefined);
      router.push('/articles', { scroll: false })
    } catch (err) {
      setError((err as { message: string }).message );
    }
  }

  return (
    <Card title="Login" bordered headStyle={{ fontSize: 30, textAlign: 'center' }}>
      <AlertContainer>
        {error && <Alert message={error} type="error" showIcon />}
      </AlertContainer>
      <Form name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
        <Link href="/auth/register">
          <Button type="default" block>
            Goto Register
          </Button>
        </Link>
      </Form>
    </Card>
  )
}
