import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Card, Carousel, Col, Divider, Grid, Image, Layout, List, Row, Space, Typography } from "antd";
import { DoubleRightOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Parallax } from "react-parallax";
import moment from "moment";
import 'moment/locale/es';

import AnnouncementsService from "../../services/apiServices/announcementsService";
import BlogEntriesService from "../../services/apiServices/blogEntriesService";
import ImageDisplayer from "../../components/imagedisplayer/imagedisplayer";

import "./home.css";

const { useBreakpoint } = Grid;
const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const services = [
  {
    name: 'Oración y discipulado',
    day: 'Martes',
    since: '7:00 PM',
    until: '8:00 PM'
  },
  {
    name: 'Estudio bíblico',
    day: 'Jueves',
    since: '7:00 PM',
    until: '8:00 PM'
  },
  {
    name: 'Escuela dominical',
    day: 'Domingo',
    since: '10:00 AM',
    until: '11:00 AM'
  },
  {
    name: 'Culto de adoración*',
    day: 'Domingo',
    since: '11:00 AM',
    until: '12:00 AM'
  }
];

export default function Home() {
  const screens = useBreakpoint();

  const [announcements, setAnnouncements] = useState([]);
  const [entries, setEntries] = useState([]);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    document.title = 'Inicio | ibreca.org';

    Promise.all([
      AnnouncementsService.GetAll(),
      BlogEntriesService.GetRecents()
    ])
      .then(([announcementResponse, blogEntriesResponse]) => {
        announcementResponse.json().then(data => {
          if (announcementResponse.ok) {
            setAnnouncements([...data, ...data, ...data, ...data, ...data, ...data, ...data]);
          } else {
            console.error(data?.title);
          }
        })

        blogEntriesResponse.json().then(data => {
          if (blogEntriesResponse.ok) {
            setEntries(data);
          } else {
            console.error(data?.title);
          }
        })
      })
      .catch((errors) => {
        console.error(errors)
      });

    const scrollFunction = () => {
      setHasScroll(true);
      window.removeEventListener('scroll', scrollFunction, { capture: true, passive: true });
    }

    window.addEventListener('scroll', scrollFunction, { capture: true, passive: true });

    return () => {
      window.removeEventListener('scroll', scrollFunction, { capture: true, passive: true });
    }
  }, [])

  return (
    <Content>
      <Parallax bgImage="/images/ibreca -fondo.png">
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

          <Title level={3} type="secondary" className={`home-scroll ${hasScroll ? 'hidden' : ''}`}>
            <Space size="large">
              <DoubleRightOutlined className="rotate" />
              Ver más
              <DoubleRightOutlined className="rotate" />
            </Space>
          </Title>
        </div>
      </Parallax>

      {!announcements.length ? <></> : (
        <section className="home-section">
          <Row justify="center" gutter={16}>
            <Col xs={22} xl={19} xxl={12}>
              <Carousel
                className={`home-carousel ${!screens['md'] ? 'mobile' : undefined}`}
                draggable={true}
                swipeToSlide={true}
                infinite
                slidesToShow={
                  screens['md']
                    ? (announcements.length < 3 ? announcements.length : 3)
                    : (announcements.length < 2 ? announcements.length : 2)
                }
                dots={{ className: "home-carousel-dots" }}
              >
                {
                  announcements.map((announcement, index) => {
                    return (
                      <div key={index} className="home-carousel-image">
                        <Image alt={announcement.title} src={announcement.url} />
                      </div>
                    )
                  })
                }
              </Carousel>
            </Col>
          </Row>
        </section>
      )}

      <section className="home-section">
        <div style={{ margin: "0px 32px" }}>
          <div className="home-section-title-container">
            <Title className="home-section-title" type="danger">Servicios</Title>

            <div className="home-section-icon-container">
              <CalendarOutlined className="home-section-icon" />
            </div>
          </div>
        </div>

        <List
          itemLayout="vertical"
          size="large"
          dataSource={services}
          footer={
            <Paragraph italic strong type="danger" style={{ textAlign: "center" }}>
              *Primer domingo de cada mes el culto de adoración empieza a las 6:30 PM
            </Paragraph>
          }
          renderItem={(item, index) => (
            <List.Item key={index} className="home-service-list-item">
              <p className="home-service-extra">{item.day}</p>

              <div style={{ width: "calc(100% - 256px)", textAlign: "center", margin: "auto" }}>
                <Title className="home-service-title">{item.name}</Title>
                <Title level={5}>
                  <Divider style={{ margin: 0 }}><ClockCircleOutlined /></Divider>
                  {item.since} - {item.until}
                </Title>
              </div>
            </List.Item>
          )}
        />
      </section>

      {!entries.length ? <></> : (
        <section className="home-section primary">
          <div style={{ margin: "0px 32px" }}>
            <div className="home-section-title-container primary">
              <Title className="home-section-title primary">Blog</Title>

              <div className="home-section-icon-container">
                <CalendarOutlined className="home-section-icon" />
              </div>
            </div>
          </div>

          <div style={{ padding: "32px", margin: "0px auto", backgroundColor: "white", maxWidth: 900 }}>
            <Row gutter={[32, 32]} justify="center">
              {entries.map(entry => {
                return (
                  <Col span="8" key={entry.id}>
                    <Link to={`/blog/${entry.id}`}>
                      <Card hoverable cover={<ImageDisplayer src={entry.coverUrl} />} >
                        <Text type="secondary">{moment(entry.publicationDate).format('DD MMM YYYY')}</Text>
                        <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                          <Title level={4} style={{ marginTop: '0.5em' }}>{entry.title}</Title>
                        </Paragraph>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </section>
      )}

    </Content >
  );
}