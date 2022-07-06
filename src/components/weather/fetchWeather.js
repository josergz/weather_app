import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = 'e6a2dc7f5237fe90a3efc52bc734f6c6';

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			lang: 'es',
			APPID: API_Key,
		},
	});
	return data;
};
