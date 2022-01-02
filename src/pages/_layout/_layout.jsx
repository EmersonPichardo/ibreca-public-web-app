import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, TeamOutlined, HourglassOutlined, SelectOutlined, ReadOutlined, EnvironmentOutlined, NotificationOutlined } from '@ant-design/icons';

import './_layout.css';

const { Header, Footer } = Layout;
const { SubMenu } = Menu;

export default function _Layout() {
  return (
    <Layout>
      <Header className="layout-header">
        <img className="logo" src="/images/Logo con siglas - Sin fondo.png" />

        <Menu className="layout-menu" mode="horizontal" theme="light" defaultSelectedKeys={['home']}>
          <Menu.Item key="inicio" icon={<HomeOutlined />}>
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <SubMenu key="nosotros" icon={<TeamOutlined />} title="Nosotros">
            <Menu.Item key="nosotros/historia" icon={<HourglassOutlined />}>
              <Link to="/nosotros/historia">Historia</Link>
            </Menu.Item>
            <Menu.Item key="nosotros/mision-y-vision" icon={<SelectOutlined />}>
              <Link to="/nosotros/mision-y-vision">Misión y visión</Link>
            </Menu.Item>
            <Menu.Item key="nosotros/declaracion-de-fe" icon={<ReadOutlined />}>
              <Link to="/nosotros/declaracion-de-fe">Declaración de fe</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="visitanos" icon={<EnvironmentOutlined />}>
            <Link to="/visitanos">Visítanos</Link>
          </Menu.Item>
          <Menu.Item key="blog" icon={<NotificationOutlined />}>
            <Link to="/blog">Blog</Link>
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