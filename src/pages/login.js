import React from 'react';
import './style/login.css';
import { Link } from 'react-router-dom';

function login() {
	return (
		<div className="d-flex p-2  loginContainer ">
			<form
				class="row g-3 needs-validation d-flex align-items-center formContainer"
				novalidate
			>
				{/* Mensaje para iniciar sesion */}
				<div class="col-12 sm-6 d-flex align-items-end">
					<p class="text-start ">Inicia sesión con tu cuenta</p>
				</div>

				{/* input de tipo email */}
				<div class="col-md-4">
					<input
						type="email"
						class="form-control sombra"
						id="validationCustom01"
						required
						placeholder="Email"
					/>
					<div class="valid-feedback">Looks good!</div>
				</div>

				{/* Input de tipo password */}
				<div class="col-md-4">
					<input
						type="password"
						class="form-control sombra"
						id="validationCustom02"
						required
						placeholder="Contraseña"
					/>
					<div class="valid-feedback">Looks good!</div>
				</div>

				{/* Boton submit para el inicio de sesion */}
				<div class="col-12">
					<button class="btn2" type="submit">
						Log In
					</button>
				</div>

				{/* Texto para registrarse */}
				<div class="col-12">
					<p className="fw-normal">
						No tienes una cuenta?{' '}
						<Link class="fw-semibold registerLink" to="/register">
							Registrate
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default login;
