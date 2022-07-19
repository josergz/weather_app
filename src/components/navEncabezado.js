import React from 'react';
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
		<nav class="navbar bg-dark fixed-top">
			<div class="container-fluid">
				<a class="navbar-brand fs-3 text text-light" href="#">
					Weather app
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span class="w-auto fs-1 text">
						<i class="bi bi-list w-auto fs-1 text text-light"></i>
					</span>
				</button>
				<div
					class="offcanvas offcanvas-end"
					tabindex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div class="offcanvas-header">
						<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
							Menú
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body">
						<button onClick={signOutHandler} type="button" class="btn ">
							Cerrar sesión
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default navEncabezado;
