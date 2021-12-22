import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './_layout.css';

const { Header, Footer } = Layout;

export default function _Layout() {
  return (
    <Layout>
      <Header className="layout-header">
        <img className="logo" src="images/Logo sin letas - sin fondo.png" />

        <Menu className="layout-menu" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="home2">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="home3">
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Outlet />

      <Footer className="layout-footer">
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}