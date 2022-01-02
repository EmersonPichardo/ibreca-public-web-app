import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { message, Typography } from 'antd';
import moment from "moment";
import 'moment/locale/es';

import PageContent from '../../../components/pageContent/pageContent'
import BlogEntriesService from '../../../services/apiServices/blogEntriesService';
import Player from '../../../components/player/player';

import './blogDetails.css'

const { Paragraph } = Typography;

export default function BlogDetails() {
    const { id } = useParams();
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

    return (
        <PageContent image={entry.coverUrl} title={entry.title}>
            <Paragraph type="secondary">{moment(entry.publicationDate).format('DD [de] MMMM [del] YYYY')}</Paragraph>
            {entry.headerUrl ? <Player url={entry.headerUrl} /> : <></>}
            <Paragraph className="blog-details-body">{entry.body}</Paragraph>
        </PageContent>
    );
}