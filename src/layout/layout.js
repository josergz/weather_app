import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

function layaout({ children }) {
	return (
		<div>
			<Nav />
			{children}
			<Footer />
		</div>
	);
}

export default layaout;
