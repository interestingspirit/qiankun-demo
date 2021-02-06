import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export default function MainMenu(props) {
  const { menus } = props
  const [{ key: defaultSelectedKeys }] = menus
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[defaultSelectedKeys]}
    >
      {
        menus.map(menu => (
          <Menu.Item key={menu.key}>
            <Link to={menu.path}>{menu.title}</Link>
          </Menu.Item>
        ))
      }
    </Menu>
  )
}
