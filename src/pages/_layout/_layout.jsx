import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import './_layout.css';

const { Header, Footer } = Layout;

export default function _Layout() {
  return (
    <Layout>
      <Header className="layout-header">
        <img className="logo" src="images/Logo sin letas - sin fondo.png" />

        <Menu className="layout-menu" mode="horizontal" theme="dark" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="predicas">
            <Link to="/">Prédicas</Link>
          </Menu.Item>
          <Menu.Item key="historia">
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