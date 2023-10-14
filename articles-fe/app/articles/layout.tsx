"use client"

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { SWRConfig } from "swr"
import { usePathname, useRouter } from "next/navigation"
import { Layout, Menu, message } from "antd"
import { fetcher } from "../services/config/HttpRequest"

const { Header, Content, Sider } = Layout;


const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PathNames = {
  Articles: '/articles',
  History: '/articles/history',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedKey, setSelectedKey] = useState('1');

  const items = React.useMemo(() => [
    { key: '1', label: 'Home', onClick: () => router.push(PathNames.Articles), pathname: PathNames.Articles },
    { key: '2', label: 'History', onClick: () => router.push(PathNames.History), pathname: PathNames.History },
  ], [router]);

  useEffect(() => {
    const key = items.find(item => pathname === item.pathname)?.key;
    setSelectedKey(key || '1');
  }, [items, pathname])



  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} selectedKeys={[selectedKey]} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <SWRConfig
              value={{
                refreshInterval: 3000,
                fetcher,
                onError: (error, key) => {
                  if (error.status === 401) {
                    router.push('/auth/login', { scroll: false })
                    messageApi.error('Please Login First');
                  }
                }
              }}
            >
              {contextHolder}
              {children}
            </SWRConfig>
        </Content>
      </Layout>
    </Layout>


  )
}
