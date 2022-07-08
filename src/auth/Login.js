import * as React from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fire';

import './style/login.css';
function Login({ setAuthState, setUser }) {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleLogin = () => {
		if (email !== null && password !== null) {
			signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					setUser(email);
					setAuthState('home');
				})
				.catch((err) => alert(err));
		}
	};

	return (
		<div className="contenedor">
			<div className="formContainer">
				<h3 className="text-start">Inicia sesión con tu cuenta</h3>

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
				{/* Boton para iniciar sesion */}
				<div className="">
					<button onClick={handleLogin} className="mt-8 flex flex-col gap-y-4">
						Log In
					</button>
				</div>
				{/* Boton para registrarse */}
				<div className="registroContainer">
					<p className="">No tienes una cuenta?</p>
					<button
						className="registerLink"
						onClick={() => setAuthState('register')}
					>
						Registrate
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
