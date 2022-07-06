import React from 'react';
import { Link } from 'react-router-dom';

// import '../pages/style/register.css';

function register() {
	return (
		<div>
			<div className="d-flex p-2  loginContainer ">
				<form
					class="row g-3 needs-validation d-flex align-items-center formContainer"
					novalidate
				>
					<Link class="btn1 text-start" role="button" to="/login">
						<i class="bi bi-arrow-left"></i>
					</Link>

					{/* Mensaje para iniciar sesion */}
					<div class="col-12 sm-6 d-flex align-items-end">
						<p class="text-start ">Crea tu cuenta</p>
					</div>

					{/* input de tipo texto */}
					<div class="col-md-12">
						<input
							type="text"
							class="form-control sombra"
							id="validationCustom01"
							// required
							placeholder="Nombre"
						/>
					</div>

					{/* input de tipo texto */}
					<div class="col-md-12">
						<input
							type="text"
							class="form-control sombra"
							id="validationCustom01"
							// required
							placeholder="Apellidos"
						/>
					</div>

					{/* input de tipo email */}
					<div class="col-md-12">
						<input
							type="email"
							class="form-control sombra"
							id="validationCustom01"
							// required
							placeholder="Email"
						/>
					</div>

					{/* Input de tipo password */}
					<div class="col-md-12">
						<input
							type="password"
							class="form-control sombra"
							id="validationCustom02"
							// required
							placeholder="Contraseña"
						/>
					</div>

					{/* Input de tipo password */}
					<div class="col-md-12">
						<input
							type="password"
							class="form-control sombra"
							id="validationCustom02"
							// required
							placeholder="Confirmar Contraseña"
						/>
					</div>

					{/* Boton submit para el registro de cuentan */}
					<div class="col-12">
						<button class="btn2" type="submit">
							Sing Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default register;
