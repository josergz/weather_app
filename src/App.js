import * as React from 'react';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/home';
import Cargando from './components/loading';

//Mantenerse al tanto del estado de autenticacion de los usuarios, se logra utilizando variables de useState

//Para acceder al backend se importan los metoos de firebase
import { auth } from './fire';
//Este metodo nos regresa el usuario y su estado
import { onAuthStateChanged } from 'firebase/auth';

function App() {
	const [user, setUser] = React.useState(null);
	//Variable que mantiene los estados de la autenticacion
	const [authState, setAuthState] = React.useState(null);

	// Cuando se corre la aplicacion de react, utilizando el use effect podremos ver cual es el estado del usuario
	React.useEffect(() => {
		const unSubscribeAuth = onAuthStateChanged(
			auth,
			async (authenticatedUser) => {
				if (authenticatedUser) {
					setUser(authenticatedUser.email);
					setAuthState('home');
				} else {
					setUser(null);
					setAuthState('login');
				}
			}
		);

		return unSubscribeAuth;
	}, [user]);

	//Mensaje de cargando
	if (authState === null)
		return (
			<div className="font-bold text-center text-5xl">
				<Cargando />
			</div>
		);

	if (authState === 'login')
		return <Login setAuthState={setAuthState} setUser={setUser} />;

	if (authState === 'register')
		return <Register setAuthState={setAuthState} setUser={setUser} />;

	//Si el usuario está logeado, lo manda al home
	if (user)
		return <Home user={user} setAuthState={setAuthState} setUser={setUser} />;
}

export default App;
