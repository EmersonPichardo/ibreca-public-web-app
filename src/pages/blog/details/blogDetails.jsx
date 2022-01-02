import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Grid, message, Typography } from 'antd';
import moment from "moment";
import 'moment/locale/es';

import PageContent from '../../../components/pageContent/pageContent'
import BlogEntriesService from '../../../services/apiServices/blogEntriesService';
import Player from '../../../components/player/player';

import './blogDetails.css'

const { useBreakpoint } = Grid;
const { Paragraph } = Typography;

export default function BlogDetails() {
    const { id } = useParams();
    const screens = useBreakpoint();
    const navigate = useNavigate();

    const [entry, setEntry] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) navigate('/blog');

        BlogEntriesService.Get(id)
            .then(response => {
                response.json().then(data => {
                    if (response.ok) {
                        setEntry(data);
                        setLoading(false);
                    } else {
                        message.error(data.title);
                    }
                })
            })
            .catch((error) => {
                message.error(error.message);
            });
    }, [])

    const getClass = () => {
        if (screens['xl']) return '';
        if (screens['lg']) return 'lg';
        if (screens['md']) return 'md';
        return 'sm';
    }

    return (
        <PageContent image={entry.coverUrl} title={entry.title}>
            <div className={`blog-details-content ${getClass()}`}>
                <Paragraph type="secondary">{moment(entry.publicationDate).format('DD [de] MMMM [del] YYYY')}</Paragraph>
                {!entry.headerUrl ? <></> :
                    (
                        <div className="blog-details-header">
                            <Player url={entry.headerUrl} />
                        </div>
                    )
                }
                <Paragraph className={`blog-details-body ${getClass()}`}><div dangerouslySetInnerHTML={{ __html: entry.body }} /></Paragraph>
            </div>
        </PageContent>
    );
}