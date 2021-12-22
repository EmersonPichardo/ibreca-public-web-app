import { Breadcrumb, Layout } from 'antd';

import './pageContent.css';

const { Content } = Layout;

export default function PageContent(props) {
    return (
        <Content className="page-content">
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="page-content-outlet">
                {props.children}
            </div>
        </Content>
    );
}