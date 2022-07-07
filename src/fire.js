// Configuracion inicial que te proporciona firebase al iniciar un nuevo proyecto
import { initializeApp } from 'firebase/app';
// Importamos el metodo que se usa para la autenticacion
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyCVAcg7xoN2uy1TCa1_7JeyW6AghfYMMUA',
	authDomain: 'weather-app-86cc6.firebaseapp.com',
	projectId: 'weather-app-86cc6',
	storageBucket: 'weather-app-86cc6.appspot.com',
	messagingSenderId: '431998806100',
	appId: '1:431998806100:web:49e5a552879a0f1a49e5c1',
};

initializeApp(firebaseConfig);
export const auth = getAuth();
