// Configuracion inicial que te proporciona firebase al iniciar un nuevo proyecto
import { initializeApp } from 'firebase/app';
// Importamos el metodo que se usa para la autenticacion
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyC_GxDZ_Sarx9zUosBj3B6EaP6Jmma4FVI',
	authDomain: 'weatherapp-3cc79.firebaseapp.com',
	projectId: 'weatherapp-3cc79',
	storageBucket: 'weatherapp-3cc79.firebasestorage.app',
	messagingSenderId: '291880535009',
	appId: '1:291880535009:web:ed5cb4936a42f4fb4a08a0',
	measurementId: 'G-0RYDWZ3GBG',
};

//Initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
