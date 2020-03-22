import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as Pages from './pages';

const { Content } = Layout;

export default function Router() {
	return (
		<BrowserRouter>
			<Layout style={{ minHeight: '100vh' }}>
				<Layout>
					<Content>
						<Switch>
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
