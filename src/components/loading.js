import React from 'react';
import '../assets/css/loading.css';

function loading() {
	return (
		<div class="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default loading;
