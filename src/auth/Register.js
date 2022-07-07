import * as React from 'react';

import { auth } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
		<div className="">
			<h1 className="">Register</h1>
			<p className="">Welcome back! Please enter you details.</p>
			<div className="">
				{/* input para ingresar email  */}
				<div className="">
					<label className="">Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className=""
						placeholder="Enter your email"
					/>
				</div>
				{/* input para introducir tu contraseña  */}
				<div className="">
					<label className="">Password</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className=""
						placeholder="Enter your email"
						type={'password'}
					/>
				</div>

				{/* input para registrarse  */}
				<div className="">
					<button onClick={onSignUpHandle} className="">
						Register
					</button>
				</div>

				<div className="">
					<p className="">ya tienes una cuenta?</p>
					<button onClick={() => setAuthState('login')}>inicio</button>
				</div>
			</div>
		</div>
	);
}
