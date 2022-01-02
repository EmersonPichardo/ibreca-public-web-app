import { Carousel, Col, Grid, Image, Layout, Row, Typography } from "antd";
import { Parallax } from "react-parallax";

import "./home.css";

const { useBreakpoint } = Grid;
const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const screens = useBreakpoint();

  document.title = 'Inicio - IBRECA';

  const images = [
    "/images/Logo con fondo azul cropped.PNG",
    "/images/Logo con fondo azul.PNG",
    "/images/Logo sin letas - sin fondo.png",
    "/images/Logo sin siglas.png",
    "/images/Logo con fondo azul.PNG",
    "/images/Logo sin letas - sin fondo.png",
    "/images/Logo sin siglas.png"
  ]

  return (
    <Content>
      <Parallax bgImage="/images/ibreca -fondo.png" blur={4}>
        <div className="home-parallax-welcome">
          <Row justify="center" gutter={[16, 0]}>
            <Col xs={6} sm={5} md={4} xl={3} xxl={1}>
              <img className="home-icon" src="/images/Logo sin letas - sin fondo.png" />
            </Col>
            <Col span={24}>
              <Title className={`home-title ${!screens['md'] ? 'mobile' : undefined}`}>Iglesia Bautista Redención en la "Caleta"</Title>
            </Col>
            <Col span={24}>
              <Title level={2} className={`home-subtitle ${!screens['md'] ? 'mobile' : undefined}`}>IBRECA</Title>
            </Col>
          </Row>

          <div>
            <Row justify="center" gutter={16}>
              <Col xs={20} xl={14} xxl={12}>
                <Carousel
                  className={`home-carousel ${!screens['md'] ? 'mobile' : undefined}`}
                  autoplay
                  draggable={true}
                  swipeToSlide={true}
                  infinite
                  slidesToShow={screens['md'] ? 3 : 2}
                  dots={{ className: "home-carousel-dots" }}
                >
                  {
                    images.map((src, index) => {
                      return (
                        <div key={index} className="home-carousel-image">
                          <Image src={src} />
                        </div>
                      )
                    })
                  }
                </Carousel>
              </Col>
            </Row>
          </div>
        </div>
      </Parallax>
    </Content >
  );
}