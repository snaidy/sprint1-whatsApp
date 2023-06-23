import "../styles/styles.scss"
import validateCredentials from './services/getloguin.js';
import { URL_API } from './services/data.js';


document.addEventListener('DOMContentLoaded', () => {
    const loguinDiv = document.getElementById('loguin');
    const registerDiv = document.getElementById('register');
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        loguinDiv.classList.add('hidden');
        registerDiv.classList.remove('hidden');
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
        alert('Por favor, complete todos los campos.');
        return; 
      }
      validateCredentials(phoneNumber, password, URL_API);
  });