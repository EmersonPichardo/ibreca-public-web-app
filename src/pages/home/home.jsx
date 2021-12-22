import { Layout } from "antd";

import "./home.css";

const { Content } = Layout;

export default function Home() {
  return (
    <Content className="home-content">
      <img className="home-main-image" src="images/Logo con fondo azul cropped.PNG" />

      <div className="home-content-outlet">
        Hola mundo
      </div>
    </Content>
  );
}