import React from 'react';
import FormWeather from '../components/weather/Form';
import './style/home.css';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';

function Home({ user, setAuthState, setUser }) {
	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				setAuthState('login');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="home">
			<div className="homeContainer">
				<h3 className="titulo">Bienvenido</h3>
				<FormWeather />
			</div>
			<div className="">
				This is the home screen
				{user}
				<button onClick={signOutHandler} className="">
					Sign Out
				</button>
			</div>
		</div>
	);
}

export default Home;
