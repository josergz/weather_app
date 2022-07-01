import React from 'react'
import './style components/nav.css'

function nav() {
	return (
<div>

<html lang="en"/>
<head/>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Menú Responsive</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"/>
<head/>
<body>
    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <a href="#" class="enlace">
            <img src="logo.png" alt="" class="logo"/>
        </a>
        <ul>
            <li><a class="active" href="#">MENU</a></li>
            <li><a href="#">Perfil de Usuario</a></li>
            <li><a href="#">Notificaciones</a></li>
            <li><a href="#">Cerar sesion</a></li>
		</ul>
    </nav>
		
</body>


</div>

	);
}

export default nav;
