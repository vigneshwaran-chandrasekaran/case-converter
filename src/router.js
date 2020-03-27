import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Pages from './pages';

const { Header, Footer, Sider, Content } = Layout;

export default function Router() {
	return (
		<BrowserRouter>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider>Sider</Sider>
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
