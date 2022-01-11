import { useEffect } from 'react';

import { Col, Grid, Layout, Row, Skeleton, Typography } from 'antd';
import { Parallax } from 'react-parallax';

import './pageContent.css';

const { useBreakpoint } = Grid;
const { Content } = Layout;
const { Title } = Typography;

export default function PageContent(props) {
    const { loading, image, title, children } = props;
    const screens = useBreakpoint();

    const getClass = () => {
        if (screens['xl']) return '';
        if (screens['lg']) return 'lg';
        if (screens['md']) return 'md';
        return 'sm';
    }

    useEffect(() => {
        document.title = `${loading ? 'cargando...' : title} - IBRECA`;
        window.scrollTo(0, 0);
    }, [title, loading])

    return (<>
        <Parallax bgImage={(loading ? <Skeleton.Image active /> : image) ?? "/images/ibreca -fondo.png"} strength={-128} blur={4} >
            <div className="page-parallax-content">

                {loading ? (
                    <Skeleton.Input active style={{ width: '50%', height: 64, transform: 'translateX(50%)' }} />
                ) : (
                    <Title className={`page-title ${getClass()}`}>{title}</Title>
                )}
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