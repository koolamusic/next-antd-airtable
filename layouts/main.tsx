import dynamic from 'next/dynamic'
import Link from 'next/link'
// import Link from 'next/link'
import { Layout } from 'antd'
import('antd/lib/menu/style/index')
import { Menu } from 'antd'
import { TableOutlined, MenuFoldOutlined } from '@ant-design/icons'

import { Route, MenuDataItem } from '@ant-design/pro-layout/lib/typings'

// const MenuItem = dynamic(() => import('antd/lib/menu/MenuItem'))
const MenuItem = Menu.Item
const { Header, Content } = Layout;


const ROUTES: Route = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      icon: <TableOutlined />
    },
    // {
    //   path: '/welcome',
    //   name: 'Welcome',
    //   icon: <SettingOutlined />,
    // },
    // {
    //   path: '/antd',
    //   name: 'Ant',
    //   icon: <SettingOutlined />,
    // },


    // {
    //   path: '/example',
    //   name: 'Example Page',
    //   icon: <MenuFoldOutlined />,
    // },
  ],
}

const menuItemRender = () => (
  ROUTES.routes.map((rt, idx) => {
    return (
      <MenuItem key={rt.path}>
        <Link href={rt.path}>
          <a>{rt.icon}</a>
        </Link>
      </MenuItem>

    )
  })

)

export default function Main({ children }) {
  return (
    <Header
    >
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {menuItemRender()}
      </Menu>

      <Content>
        {children}
      </Content>
    </Header>
  )
}
