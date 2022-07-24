import React, { useState } from 'react';

const Form = ({ newLocation }) => {
	const [city, setCity] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		console.log({ city });
		if (city === '' || !city) return;

		newLocation(city);
	};

	return (
		<div className="containerForm ">
			<form onSubmit={onSubmit}>
				<div className="input-group mb-3 mx-auto formContainer">
					<input
						type="text"
						className="form-control"
						placeholder="Ingrese el nombre de la ciudad"
						onChange={(e) => setCity(e.target.value)}
					/>
					<button className="btn btn-primary input-group-text" type="submit">
						Buscar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
