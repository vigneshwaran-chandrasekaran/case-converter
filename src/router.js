import React from 'react';
import { Layout, Menu } from 'antd';
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import * as Pages from './pages';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

export default function Router() {
	return (
		<BrowserRouter>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
					onBreakpoint={broken => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}
				>
					<div className="logo" />
					<Menu
						theme="light"
						mode="inline"
						defaultSelectedKeys={['1']}
					>
						<Menu.Item key="1">
							<Link to="/case-converter">Case converter</Link>
							<span className="nav-text">Case converter</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/url-query-string-parser">
								URL Parser
							</Link>
							<span className="nav-text">URL Parser</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header>Header</Header>
					<Content>
						<Switch>
							<Route path="/case-converter">
								<Pages.CaseConverter />
							</Route>
							<Route path="/url-query-string-parser">
								<Pages.UrlQueryStringParser />
							</Route>
							<Route path="*">
								<Pages.NotFound />
							</Route>
						</Switch>
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		</BrowserRouter>
	);
}
