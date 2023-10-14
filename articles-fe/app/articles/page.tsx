"use client";

import { useState } from 'react';
import { Button, Card as AntCard, Form, Input, Alert, Table,  Spin, Layout, theme, Typography } from 'antd'
import styled from 'styled-components';
import useSWR, { useSWRConfig } from 'swr';
import { getAll } from './api';
import { useRouter } from 'next/navigation';

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 10rem;
  align-item: center;
  justify-content: center;
`;

const Card = styled(AntCard)`
  height: 20vh;
  width: 20vw;
  margin: 2rem;
  cursor: pointer;
`;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export default function Articles() {
  const { data, error, isLoading } = useSWR('articles', getAll)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter()

  if (isLoading) {
    return (
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
    )
  }

  if (!data) return null;

  return (
    <>
      <Layout.Header style={{ background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography.Title>Articles</Typography.Title>
      </Layout.Header>
      <CardWrap>
        {
          data.map(({ id, name, description }) => (
            <Card key={id} title={name} bordered={false} onClick={() => router.push(`/articles/${id}`, { scroll: false })}>
              {description}
            </Card>
          ))
        }
      </CardWrap>
    </>
  );
}
