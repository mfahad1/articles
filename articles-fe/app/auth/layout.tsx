"use client"

import styled from "styled-components"
import { fetcher } from "../services/config/HttpRequest"
import { SWRConfig } from "swr"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15vh;
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Wrap>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher
        }}
      >
        <h1>Welcome to Article Database</h1>
        {children}
      </SWRConfig>
    </Wrap>
  )
}
