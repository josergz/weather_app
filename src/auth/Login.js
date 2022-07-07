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
			<div className="">
				<div className=" ">

					
					<div className="formContainer">
					<p className="text-start">inicia sesión con tu cuenta</p>
						{/* Input para ingresar el correo  */}
						<div className="mb-3">
							<label className="sombra"></label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="form-control"
								placeholder="email"
							/>
						</div>
						{/* Input para ingresar la contraseña  */}
						<div className="">
							
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="form-control"
								placeholder= "Contraseña"
								type={'password'}
							/>
						</div>
						{/* Boton para iniciar sesion */}
						<div className="">
							<button onClick={handleLogin} className="mt-8 flex flex-col gap-y-4">Log In</button>
						</div>
						{/* Boton para registrarse */}
						<div className="">
							<p className="cuenta">No tienes una cuenta?</p>
							
							<button className="registerLink" onClick={() => setAuthState('register')}>Registrate</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
