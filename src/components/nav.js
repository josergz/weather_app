import React from 'react';
import './style_components/nav.css';
import { Link } from 'react-router-dom';
function nav() {
	return (
		<div>
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
				rel="stylesheet"
			/>
			<body>
				<nav>
					<input type="checkbox" id="check" />
					<label for="check" class="checkbtn">
						<i class="fas fa-bars"></i>
					</label>
					<Link to="/" class="enlace">
						<img src="logo.png" alt="" class="logo" />
					</Link>
					<ul>
						<li>
							<Link class="active" to="/">
								MENU
							</Link>
						</li>
						<li>
							<Link to="/register">Registro</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/">Perfil de Usuario</Link>
						</li>
						<li>
							<Link to="/">Notificaciones</Link>
						</li>
						<li>
							<Link to="/">Cerar sesion</Link>
						</li>
					</ul>
				</nav>
			</body>
		</div>
	);
}

export default nav;
