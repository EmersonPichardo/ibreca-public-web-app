import { useEffect, useState } from "react";

import { Carousel, Col, Image, Layout, Row, Typography } from "antd";
import { Parallax } from "react-parallax";

import "./home.css";

const { Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const images = [
    "images/Logo con fondo azul cropped.PNG",
    "images/Logo con fondo azul.PNG",
    "images/Logo sin letas - sin fondo.png",
    "images/Logo sin siglas.png",
    "images/Logo con fondo azul.PNG",
    "images/Logo sin letas - sin fondo.png",
    "images/Logo sin siglas.png"
  ]

  return (
    <Content>
      <Parallax bgImage="images/ibreca -fondo.png">
        <div className="home-parallax-welcome" style={{ marginTop: '80px' }}>
          <Row justify="center" gutter={[16, 0]}>
            <Col xs={6} sm={5} md={4} xl={3} xxl={1}>
              <img width={'100%'} src="images/Logo sin letas - sin fondo.png" />
            </Col>
            <Col span={24}>
              <Title className="home-title">Iglesia Bautista Redención en la "Caleta"</Title>
            </Col>
            <Col span={24}>
              <Title level={2} className="home-subtitle">IBRECA</Title>
            </Col>
          </Row>

          <div>
            <Row justify="center" gutter={16}>
              <Col xs={24} md={20} xl={14} xxl={12}>
                <Carousel
                  className="home-carousel"
                  autoplay
                  draggable={true}
                  swipeToSlide={true}
                  infinite
                  slidesToShow={3}
                  dots={{ className: "home-carousel-dots" }}
                  responsive={[
                    {
                      breakpoint: 680,
                      settings: {
                        slidesToShow: 2
                      }
                    }
                  ]}
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