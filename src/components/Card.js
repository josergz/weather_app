import React from 'react';
import Spinner from '../components/loading';

import '../assets/css/card.css';

const Card = ({ loadingData, showData, weather, forecast }) => {
	const nombreDelDiaSegunFecha = (fecha) => {
		return [
			'Domingo',
			'Lunes',
			'Martes',
			'Miercoles',
			'Jueves',
			'Viernes',
			'Sabado',
		][new Date(fecha).getDay()];
	};

	var hoy = new Date();
	var hora = hoy.getHours() + ':' + hoy.getMinutes() + ' Hrs.';
	var horaActual = hora;

	var today = new Date();
	var fecha = today.getDay();

	var diaSemana = nombreDelDiaSegunFecha(fecha);

	var url = '';
	var iconUrl = '';

	var iconUrl3 = '';
	var iconUrl6 = '';
	var iconUrl9 = '';

	var forecastDate3 = '';
	var forecastDate6 = '';
	var forecastDate9 = '';

	if (loadingData) {
		return <Spinner />;
	}

	if (showData) {
		url = 'http://openweathermap.org/img/w/';
		iconUrl = url + weather.weather[0].icon + '.png';

		iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
		iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
		iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';

		forecastDate3 =
			forecast.list[0].dt_txt.substring(8, 10) +
			'/' +
			forecast.list[0].dt_txt.substring(5, 7) +
			'/' +
			forecast.list[0].dt_txt.substring(0, 4) +
			' ' +
			forecast.list[0].dt_txt.substring(11, 13);
		forecastDate6 =
			forecast.list[1].dt_txt.substring(8, 10) +
			'/' +
			forecast.list[1].dt_txt.substring(5, 7) +
			'/' +
			forecast.list[1].dt_txt.substring(0, 4) +
			' ' +
			forecast.list[1].dt_txt.substring(11, 13);
		forecastDate9 =
			forecast.list[2].dt_txt.substring(8, 10) +
			'/' +
			forecast.list[2].dt_txt.substring(5, 7) +
			'/' +
			forecast.list[2].dt_txt.substring(0, 4) +
			' ' +
			forecast.list[2].dt_txt.substring(11, 13);
	}

	return (
		<div className="containerCard">
			{showData === true ? (
				<div className="containerCardHijo">
					<div className="cardHome   text-dark ">
						<div className="d-flex flex-column mb-3">
							{/* ------------------------------------------------------------------------- */}
							<div className="infoSup">
								<div className="headContainer ">
									<div className="temp">
										<h3 className="card-title">
											{weather.name} , {weather.sys.country}
										</h3>
										<div className="imgTemp">
											<img className="img" src={iconUrl} alt="icon" />
										</div>
										<h1 className="card-temp">
											{(weather.main.temp - 273.15).toFixed(1)}ºC
										</h1>
									</div>
								</div>
								<div className="headContainerdown">
									<h5 className="card-text">
										Max {(weather.main.temp_max - 273.15).toFixed(1)}º / Min{' '}
										{(weather.main.temp_min - 273.15).toFixed(1)}º
									</h5>
									<h5 className="card-text">
										Sensación térmica:{' '}
										{(weather.main.feels_like - 273.15).toFixed(1)}ºC
									</h5>

									<h5 className="card-text">
										Humedad: {weather.main.humidity}%
									</h5>
									<h5 className="card-text">
										{diaSemana}, {horaActual}
									</h5>
								</div>
							</div>

							<div className="infoInf">
								<div className="proximasHoras">
									<h5 className="pronosticoTitulo">
										Pronostico de las proximas horas
									</h5>
									<div className="proxhContainer">
										<div className="col">
											<p>{forecastDate3}h</p>
											<p className="description">
												<img src={iconUrl3} alt="icon" />
											</p>
											<p>{forecast.list[1].weather[0].description}</p>
											<p className="temp">
												{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
											</p>
										</div>
										<div className="col">
											<p>{forecastDate6}h</p>
											<p className="description">
												<img src={iconUrl6} alt="icon" />
											</p>
											<p>{forecast.list[2].weather[0].description}</p>
											<p className="temp">
												{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
											</p>
										</div>
										<div className="col">
											<p>{forecastDate9}h</p>
											<p className="description">
												<img src={iconUrl9} alt="icon" />
											</p>
											<p>{forecast.list[3].weather[0].description}</p>
											<p className="temp">
												{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<h2 className="text-dark text-center">Sin datos</h2>
			)}
		</div>
	);
};

export default Card;
