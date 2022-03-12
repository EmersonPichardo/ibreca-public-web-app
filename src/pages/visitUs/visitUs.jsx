import { Button, Col, Form, Input, Row, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  EditOutlined
} from '@ant-design/icons';

import PageContent from "../../components/pageContent/pageContent"

import './visitUs.css';

const { Title, Text, Paragraph, Link } = Typography;
const { TextArea } = Input;

export default function VisitUs() {
  return (
    <PageContent title="Visitanos">
      <div className="visitUs-text-wrapper">
        <section className="home-section">
          <Row>
            <Col span="8">
              <Title level={2} type="danger">Servicios</Title>

              <Text strong>Escuela dominical</Text>
              <Paragraph>10:00 AM - 11:00 AM</Paragraph>

              <Text strong>Culto de adoración</Text>
              <Paragraph>11:00 AM - 12:00 AM</Paragraph>
            </Col>
            <Col span="8">
              <Title level={2} type="danger">Contactos</Title>

              <Link href="tel:+1-829-466-3133">
                <Paragraph>
                  <PhoneOutlined /> +1 (829) 466-3133
                </Paragraph>
              </Link>
              <Link href="mailto:ibrca01@gmail.com">
                <Paragraph>
                  <MailOutlined /> ibrca01@gmail.com
                </Paragraph>
              </Link>
            </Col>
            <Col span="8">
              <Title level={2} type="danger">Dirección</Title>

              <Link href="https://www.google.com/maps/place/Iglesia+Bautista+Redenci%C3%B3n+en+La+Caleta,+IBRECA/@18.4528368,-69.6882282,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf80114ed1a8dd:0x6b36f30b08366aa0!8m2!3d18.4528279!4d-69.6860397">
                <Text>
                  <EnvironmentOutlined /> C/ Salome Ureña #42, Vista Alegre La Caleta, Santo Domingo Este, República Dominicana
                </Text>
              </Link>
            </Col>
          </Row>
        </section>

        <section className="home-section primary">
          <div style={{ margin: "0px 32px" }}>
            <div className="home-section-title-container">
              <Title className="home-section-title" type="danger">Escribenos</Title>

              <div className="home-section-icon-container">
                <EditOutlined className="home-section-icon" />
              </div>
            </div>
          </div>

          <Form
            onFinish={() => { }}
            autoComplete="off"
          >
            <Form.Item label="Nombre" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Correo" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Teléfono" name="phone">
              <Input />
            </Form.Item>

            <Form.Item label="Mensaje" name="message">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </section>

      </div>
    </PageContent >
  )
}