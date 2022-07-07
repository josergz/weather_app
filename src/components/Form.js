import React from 'react';

function Form({ setUser, setAuthState }) {
	return (
		<div className="col-md-8  loginContainer ">
			<input
				type="email"
				class="form-control sombra"
				id="validationCustom01"
				required
				placeholder="Email"
			/>

			<input
				type="password"
				class="form-control sombra"
				id="validationCustom02"
				required
				placeholder="Contraseña"
			/>
			<button class="btn2" type="submit">
				Log In
			</button>

			<div class="col-12">
				<p className="fw-normal">No tienes una cuenta? </p>
				<button onClick={() => setAuthState('register')}>registrate</button>
			</div>
		</div>
	);
}

export default Form;
