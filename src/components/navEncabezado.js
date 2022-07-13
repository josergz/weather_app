import React from 'react';
import './style_components/navEncabezado.css';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';

function navEncabezado({ user, setAuthState, setUser }) {
	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				setAuthState('login');
			})
			.catch((err) => console.log(err, 'erorxd'));
	};

	return (
		// <nav className="navbarxd  text-light">
		// 	<div className="container-fluid">
		// 		<h3 className="titulonav">Weather App</h3>
		// 	</div>
		// </nav>
		<nav class="navbar navbar-expand-lg bg-light d-flex">
			<div class="container-fluid d-flex">
				<a class="navbar-brand p-2 flex-grow-1" href="#">
					Weather App
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
					<form class="d-flex" role="search">
						{/* <button
							onClick={signOutHandler}
							type="subbmin"
							class="btn btn-outline-success"
						>
							Cerrar sesion
						</button> */}
						<button
							onClick={signOutHandler}
							class="btn btn-outline-success p-2"
							type="submit"
						>
							Cerrar sesión <i class="bi bi-box-arrow-right"></i>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default navEncabezado;
