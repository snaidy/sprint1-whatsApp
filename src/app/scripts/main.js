import "../styles/styles.scss"
import validateLoguin from './modules/validLog.js';
import { URL_API_USER } from './services/data.js';
import { getuser } from "./services/getuser.js";
import swal from 'sweetalert2';
import registrar from "./modules/registeruser";
import { DateTime } from 'luxon';

import axios from "axios";
import responsive from "./modules/responsive";


// Escucha el evento de cambio de tamaño de la ventana
window.addEventListener('resize', () =>
{

  responsive();

});

const input = document.getElementById('myInput');
const micOutline = document.getElementById('micOutline');
const sendOutline = document.getElementById('sendOutline');

input.addEventListener('input', () => {
  if (input.value !== '') {
    micOutline.style.display = 'none';
    sendOutline.style.display = 'block';
  } else {
    micOutline.style.display = 'block';
    sendOutline.style.display = 'none';
  }
});




document.addEventListener('DOMContentLoaded', () => {
    const loguinDiv = document.getElementById('loguin');
    const registerDiv = document.getElementById('register');
    const registerButton = document.getElementById('registerButton');
    const buttonIngresa = document.getElementById('buttonIngresa');
    const home = document.getElementById('home');
    // const homeDiv = document.getElementById('home');

    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        loguinDiv.classList.add('hidden');
        registerDiv.classList.remove('hidden');
        // homeDiv.classList.add('hidden');
    });


        buttonIngresa.addEventListener('click', (e) => {
        e.preventDefault();
        registerDiv.classList.add('hidden');
        loguinDiv.classList.remove('hidden');
        // homeDiv.classList.add('hidden');
    });


});


//----------
const ingresaButton = document.getElementById('ingresaButton');
ingresaButton.addEventListener('click', (e)=> {
    e.preventDefault(); 
  
    // capturar los valores que ingrese el usuario
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
  
    // Validar campos vacíos
    if (phoneNumber === '' || password === '') {
        swal.fire({
            title:'Por favor, complete todos los campos.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        return; 
      }
      validateLoguin(phoneNumber, password, URL_API_USER);
  });

  registrar();