import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layout/layout';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

function routes() {
	return (
		<div>
			<Router>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/register" element={<Register />} />
						{/* <Route exact path="*" element={<NotFound />} /> */}
					</Routes>
				</Layout>
			</Router>
		</div>
	);
}

export default routes;
