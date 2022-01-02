import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Card, Col, DatePicker, Divider, Empty, Form, Input, message, Row, Typography } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import moment from "moment";
import 'moment/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';
import InfiniteScroll from "react-infinite-scroll-component";

import PageContent from '../../../components/pageContent/pageContent'
import BlogEntriesService from "../../../services/apiServices/blogEntriesService";
import ImageDisplayer from "../../../components/imagedisplayer/imagedisplayer";

import './blogList.css'

const { Text, Paragraph, Title } = Typography;
const { Item } = Form;

export default function BlogList() {
    const [form] = Form.useForm();

    const [entries, setEntries] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState({});
    const [index, setIndex] = useState({});

    useEffect(() => {
        getMoreEntries();

        return () => clearTimeout(index)
    }, [filters])

    const getMoreEntries = () => {
        const { search, from, to } = filters;

        BlogEntriesService.GetPage(page + 1, search, from, to)
            .then(response => {
                response.json().then(data => {
                    if (response.ok) {
                        setPage(page + 1);
                        setHasMore(data.hasMore);
                        setEntries([...entries, ...data.list]);
                    } else {
                        message.error(data.title);
                    }
                })
            })
            .catch((error) => {
                message.error(error.message);
                setPage(1);
                setHasMore(false);
                setEntries([]);
            });
    }

    const filterData = (values) => {
        clearTimeout(index);

        setIndex(
            setTimeout(() => {
                setHasMore(true);
                setEntries([]);
                setPage(0);

                const { search, from, to } = values;
                setFilters({ search, from: from?.toJSON(), to: to?.toJSON() });
            }, 500)
        );
    }

    return (
        <PageContent title="Blog">
            <Form
                form={form}
                autoComplete="off"
                onFinish={filterData}
            >
                <Row gutter={[8, 8]} justify="center" align="middle">
                    <Col xs={24} lg={8}>
                        <Item name="search">
                            <Input
                                type="search"
                                prefix={<SearchOutlined />}
                                placeholder="Buscar"
                                onChange={form.submit}
                                allowClear />
                        </Item>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Item name="from">
                            <DatePicker
                                className="date-picker"
                                placeholder="Desde"
                                format="DD MMM YYYY"
                                locale={locale}
                                disabledDate={current => current > moment()}
                                onChange={form.submit} />
                        </Item>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Item name="to">
                            <DatePicker
                                className="date-picker"
                                placeholder="Hasta"
                                format="DD MMM YYYY"
                                locale={locale}
                                disabledDate={current => current > moment()}
                                onChange={form.submit} />
                        </Item>
                    </Col>
                </Row>
            </Form>

            <Text type="secondary" style={{ display: 'block', margin: '8px 0px' }}>
                {`Mostrando ${entries.length} resultados`}
            </Text>

            <InfiniteScroll
                dataLength={entries.length}
                next={getMoreEntries}
                hasMore={hasMore}
                scrollableTarget="container"
                loader={
                    <Row gutter={[64, 64]}>{
                        Array.from({ length: 2 }).map((_, index) => {
                            return (
                                <Col xs={24} md={12} key={index}>
                                    <Card cover={<ImageDisplayer loading={true} />} loading={true} />
                                </Col>
                            )
                        })}
                    </Row>
                }
                endMessage={
                    entries.length ? (
                        <>
                            <Divider />
                            <Paragraph italic type="secondary" style={{ textAlign: "center" }}>Creo que eso es todo...</Paragraph>
                        </>
                    ) : (
                        <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description="No se encontraron resultados"
                        />
                    )
                }
                style={{ overflow: 'visible' }}
            >
                <Row gutter={[32, 32]}>
                    {entries.map(entry => {
                        return (
                            <Col xs={24} md={12} key={entry.id}>
                                <Link to={`/blog/${entry.id}`}>
                                    <Card hoverable cover={<ImageDisplayer src={entry.coverUrl} />} >
                                        <Text type="secondary">{moment(entry.publicationDate).format('DD MMM YYYY')}</Text>
                                        <Title level={4}>{entry.title}</Title>
                                        <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
                                            <div dangerouslySetInnerHTML={{ __html: entry.body }} /></Paragraph>
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </InfiniteScroll>
        </PageContent>
    );
}