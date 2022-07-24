import * as React from 'react';

import { auth } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import '../assets/css/register.css';

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
		<form className="contenedor">
			<div className="formContainer">
				{/* Flecha para regresar a la pantalla de login  */}
				<div className="text-start">
					<button className="arrowButton" onClick={() => setAuthState('login')}>
						<i class="bi bi-arrow-left"></i>
					</button>
				</div>

				{/* Titulo de la pagina de registro  */}
				<h3 className="text-start">Crear tu cuenta</h3>

				{/* Input para ingresar el correo  */}
				<div className="mb-3">
					<label className="sombra"></label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
						placeholder="Email"
						type={'email'}
						id="validationCustom01"
						required
					/>
				</div>
				{/* Input para ingresar la contraseña  */}
				<div className="">
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="form-control"
						placeholder="Contraseña"
						type={'password'}
						id="validationCustom02"
						required
					/>
				</div>

				{/* input para registrarse  */}
				<div className="">
					<button
						onClick={onSignUpHandle}
						className="mt-8 flex flex-col gap-y-4"
					>
						Sign up
					</button>
				</div>
			</div>
		</form>
	);
}
