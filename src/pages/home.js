import React from 'react';
import Form from '../components/weather/Form';
import './style/home.css';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';
import { ToastContainer, toast } from 'react-toastify';

function home({ user, setAuthState, setUser }) {
	const signOutHandler = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				setAuthState('login');
			})
			.catch((err) => console.log(err, 'erorxd'));
	};

	return (
		<div className="containerxd">
			<div className="homeContainer">
				{/* <h3 className="">Bienvenido {user}</h3> */}
				{/* <Card /> */}
				{/* <Form /> */}

				<div class="card mb-3 cardHome">
					<div class="row g-0">
						<div class="col-md-4">
							{/* <img
								style={{ height: '100%' }}
								src="https://source.unsplash.com/category/nature"
								class="img-fluid rounded-start"
								alt="imagen"
							/> */}
							<img
								src="https://i.pinimg.com/550x/e7/52/3f/e7523fa41a5bf574adc155807e8b5d00.jpg"
								class="img-fluid rounded-start"
								alt="imagen"
							/>
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">Bienvenido {user}</h5>
								<p class="card-text">
									A traves de Weather App puedes consultar el estado del clima
									de cualquier ciudad, ingresando su nombre en la barra de
									busqueda.
								</p>

								<Form />
								{/* Boton para cerrar sesion  */}
								<div className="">
									<button
										onClick={signOutHandler}
										type="button"
										class="btn btn-primary mt-8 flex flex-col gap-y-4"
									>
										Cerrar sesion
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default home;
