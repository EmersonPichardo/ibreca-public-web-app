import { Col, Layout, Row, Typography } from 'antd';
import { Parallax } from 'react-parallax';

import './pageContent.css';

const { Content } = Layout;
const { Title } = Typography;

export default function PageContent(props) {
    const { image, title, children } = props;

    return (<>
        <Parallax bgImage={image ?? "/images/ibreca -fondo.png"} strength={-128} blur={4} >
            <div className="page-parallax-content">
                <Title className="page-title">{title}</Title>
            </div>
        </Parallax>

        <Content className="page-content">
            <Row justify="center">
                <Col xs={22} sm={19} lg={17} xl={15} xxl={13}>
                    <div className="page-content-outlet">
                        {children}
                    </div>
                </Col>
            </Row>
        </Content>
    </>
    );
}