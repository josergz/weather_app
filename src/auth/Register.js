import * as React from 'react';

import { auth } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import '../auth/style/register.css';

export default function Register({ setAuthState, setUser }) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const onSignUpHandle = () => {
		if (email !== null && password !== null) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((user) => {
					setUser(user.user.email);
					setAuthState('home');
				})
				.catch((err) => {
					alert(err);
				});
		}
	};

	return (


		<form className="RegisterContainer">


			<div className="form-control"	>
				<h1 className="">Registro</h1>
				{/*
				<p className="">Welcome back! Please enter you details.</p>
	*/}

				<div className="">
					{/* input para ingresar email  */}
					<div className="">
						{/*	<label className="">Email</label> */}
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="caja"
							placeholder="Enter your email"
						/>
					</div>
					{/* input para introducir tu contraseña  */}
					<div className="">

						{/* <label className="">Password</label> */}
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="caja"
							placeholder="Enter your password"
							type={'password'}
						/>
					</div>

					{/* input para registrarse  */}
					<div className="sep">
						<button onClick={onSignUpHandle} className="btn">
							Register
						</button>
					</div>

					<div className="bti">
						<p className="">ya tienes una cuenta?</p>
						<button className="btn" onClick={() => setAuthState('login')}>inicio</button>
					</div>
				</div>
			</div>
		</form>
	);
}
