import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import * as Pages from './pages';

const { Sider, Content } = Layout;

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
						defaultSelectedKeys={['2']}
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
				</Layout>
			</Layout>
		</BrowserRouter>
	);
}
