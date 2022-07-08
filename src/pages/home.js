import React from 'react';
import FormWeather from '../components/weather/Form';
import './style/home.css';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';

function home({ user, setAuthState, setUser }) {
	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				setAuthState('login');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="contenedor">
			<div className="homeContainer">
				<h3 className="">Bienvenido {user}</h3>
				<FormWeather />
				{/* Boton para cerrar sesion  */}
				<div className="">
					<button onClick={signOutHandler} className="">
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
}

export default home;
