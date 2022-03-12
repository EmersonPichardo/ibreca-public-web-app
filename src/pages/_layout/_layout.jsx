import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu, Space, Typography } from 'antd';
import {
  HomeOutlined,
  TeamOutlined,
  HourglassOutlined,
  SelectOutlined,
  ReadOutlined,
  EnvironmentOutlined,
  NotificationOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined
} from '@ant-design/icons';
import Footer from 'rc-footer';

import './_layout.css';
import 'rc-footer/assets/index.css';

const { Header } = Layout;
const { SubMenu } = Menu;
const A = Typography.Link;

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

      <Footer
        backgroundColor="gray"
        maxColumnsPerRow={2}
        columns={[
          {
            icon: <InfoCircleOutlined />,
            title: 'Información adicional',
            items: [
              {
                icon: <PhoneOutlined />,
                title: '+1 (829) 466-3133',
                url: 'tel:+1-829-466-3133'
              },
              {
                icon: <MailOutlined />,
                title: 'ibrca01@gmail.com',
                url: 'mailto:ibrca01@gmail.com'
              },
              {
                icon: <EnvironmentOutlined />,
                title: 'C/ Salome Ureña #42, Vista Alegre La Caleta, Santo Domingo Este, República Dominicana',
                url: 'https://www.google.com/maps/place/Iglesia+Bautista+Redenci%C3%B3n+en+La+Caleta,+IBRECA/@18.4528368,-69.6882282,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf80114ed1a8dd:0x6b36f30b08366aa0!8m2!3d18.4528279!4d-69.6860397',
                openExternal: true
              }
            ]
          },
          {
            items: [
              {
                title: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.',
                description: <p style={{ textAlign: 'right' }}>Juan 3:16 - RV60</p>,
                LinkComponent: 'span'
              }
            ]
          }
        ]}
        bottom={
          <Space size={32} style={{ fontSize: 32 }}>
            <A href="https://www.instagram.com/ibreca_org/?igshid=rxf5cyouykc4" target="_blank">
              <InstagramOutlined />
            </A>
            <A href="https://www.youtube.com/channel/UCVn4FKJsuPIvCGGt-dF38EA/featured" target="_blank">
              <YoutubeOutlined />
            </A>
            <A href="https://www.facebook.com/iebflacaleta/" target="_blank">
              <FacebookOutlined />
            </A>
          </Space>
        }
      />

    </Layout>
  );
}