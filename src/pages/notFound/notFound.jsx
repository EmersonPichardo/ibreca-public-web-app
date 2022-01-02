import { Link } from "react-router-dom";
import { Result, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import './notFound.css';

export default function NotFound() {
    return (
        <div className="container" >
            <Result
                status="404"
                title="Lo sentimos, esta página no existe"
                subTitle="Error 404"
                extra={
                    <Link to="/">
                        <Button type="primary" icon={<HomeOutlined />}>
                            Volver al inicio
                        </Button>
                    </Link>
                }
            />
        </div >
    );
}