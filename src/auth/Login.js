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
		<div className="">
			<div className="">
				<div className=" ">
					<h1 className="">Welcome Back</h1>
					<p className="">Welcome back! Please enter you details.</p>
					<div className="">
						{/* Input para ingresar el correo  */}
						<div className="">
							<label className="">Email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className=""
								placeholder="Enter your email"
							/>
						</div>
						{/* Input para ingresar la contraseña  */}
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
						{/* Boton para iniciar sesion */}
						<div className="mt-8 flex flex-col gap-y-4">
							<button onClick={handleLogin} className="">
								Log In
							</button>
						</div>
						{/* Boton para registrarse */}
						<div className="">
							<p className="">No tienes una cuenta?</p>
							<button onClick={() => setAuthState('register')}>
								Registrate
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
