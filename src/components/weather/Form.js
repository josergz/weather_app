import React, { useState } from 'react';

import { fetchWeather } from './fetchWeather';
import 'bootstrap/dist/css/bootstrap.css';

const FormWeather = () => {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = async (e) => {
		if (e.key === 'Enter') {
			const data = await fetchWeather(query);

			setWeather(data);
			setQuery('');
		}
	};

	return (
		<div className="">
			<div className="buscadorContainer">
				<div className="input-group mb-3 mx-auto">
					{/* Barra de busqueda  */}
					<input
						type="text"
						className="form-control"
						placeholder="Buscar ciudad"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyPress={search}
					/>
					{/* Boton de busqueda  */}
					<button
						className="btn btn-dark input-group-text"
						type="submit"
						onKeyPress={search}
					>
						<i class="bi bi-search"></i>
					</button>
				</div>

				{weather.main && (
					<div className="infoContainer">
						<div className="city">
							{/* Imagen del clima */}
							<div className="city-img">
								<img
									src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
									alt={weather.weather[0].description}
									className="city-img2"
								/>
							</div>
							{/* Nombre de la ciudad */}
							<h2 className="city-name">
								{weather.name} , {weather.sys.country}
							</h2>

							{/* Temperatura de la ciudad  */}
							<div className="city-temp">
								{'Temp: ' + Math.round(weather.main.temp) + ' °C'}
							</div>

							<div className="city-description">
								<p>{weather.weather[0].description}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FormWeather;
