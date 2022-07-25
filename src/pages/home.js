import React from 'react';
// import Form from '../components/Form';

import '../assets/css/home.css';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';
import Nav from '../components/Navbar';
import WeatherInfo from '../components/WeatherInfo';
import Contacto from '../pages/Contacto';
import About from '../pages/about';

function home({ user, setAuthState, setUser }) {
	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				setAuthState('login');
			})
			.catch((err) => console.log(err, 'erorxd'));
	};

	return (
		<div className="containerhome">
			<About/>
			<Nav />
			<WeatherInfo />
			<Contacto/>
			
		</div>
		
	);
}

export default home;
