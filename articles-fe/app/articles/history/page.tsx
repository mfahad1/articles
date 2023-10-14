"use client";

import { useState } from 'react';
import { Button, Card as AntCard, Form, Input, Alert, Table,  Spin, Layout, theme, Typography } from 'antd'
import styled from 'styled-components';
import useSWR, { useSWRConfig } from 'swr';
import { getAll, getArticles } from '../api';
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

export default function History() {
  const { data, isLoading } = useSWR('articles/history', getArticles)
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
  if (!data?.articles) return null;

  return (
    <>
      <Layout.Header style={{ background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography.Title>History</Typography.Title>
      </Layout.Header>
      <CardWrap>
        {
          data.articles.length === 0 && <Alert message="You do not have any history at the moment" type="warning" showIcon />
        }
        {
          data.articles.map(({ id, name, description }) => (
            <Card key={id} title={name} bordered={false} onClick={() => router.push(`/articles/${id}`, { scroll: false })}>
              {description}
            </Card>
          ))
        }
      </CardWrap>
    </>
  );
}
