import React from 'react';
import FormWeather from '../components/weather/Form';
import './style/home.css';

function home() {
	return (
		<div className="home">
			<div className="homeContainer">
				<h3 className="titulo">Bienvenido</h3>
				<FormWeather />
			</div>
		</div>
	);
}

export default home;
