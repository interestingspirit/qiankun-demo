import React from 'react'
import { Layout } from 'antd'
import MainMenu from '../components/MainMenu'

const { Header, Sider, Content } = Layout

export default function BasicLayout(props) {
  const { menus, children } = props
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
          <MainMenu menus={menus} />
        </Sider>
        <Content>{ children }</Content>
      </Layout>
    </Layout>
  )
}
