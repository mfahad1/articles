"use client";

import { useState } from 'react';
import { Button, Card as AntCard, Form, Input, Alert, Table,  Spin, Layout, theme, Typography, Card } from 'antd'
import styled from 'styled-components';
import useSWR, { useSWRConfig } from 'swr';
import { useParams } from 'next/navigation'
import { get } from '../api';



export default function Article() {
  const params = useParams<{ id: string }>()

  const { data, error, isLoading } = useSWR(`articles/${params.id}`, () => get(params.id))

  if (isLoading) {
    return (
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
    )
  }

  if (!data) return null;

  return (
    <Card title={data.name}>
      {data.description}
    </Card>
  );
}
