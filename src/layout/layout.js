import React from 'react';
import Nav from '../components/nav';
import NavEncabezado from '../components/navEncabezado';

function layaout({ children }) {
	return (
		<div>
			<NavEncabezado />
			<Nav />

			{children}
		</div>
	);
}

export default layaout;
