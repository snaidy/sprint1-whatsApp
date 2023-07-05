import "../styles/styles.scss"
import validateLoguin from './modules/validLog.js';
import { URL_API_USER } from './services/data.js';
import { getuser } from "./services/getuser.js";
import swal from 'sweetalert2';
import registrar from "./modules/registeruser";
import { DateTime } from 'luxon';

import axios from "axios";



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



console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');



// URL del JSON-SERVER
// const url = 'https://whatsapp-8lqf.onrender.com/conversation';

// // ID del usuario y del objeto "chats" que deseas modificar
// const userId = 6;
// const chatsId = 2;

// // Nuevo valor para la propiedad "flag"
// const nuevoValorFlag = true;


// // Realiza la solicitud GET para obtener el objeto de conversación actual
//   axios.get(`${url}/${userId}`)
//   .then(response => {
//     const conversation = response.data;

//     const newChat = conversation.chats;




//     // Encuentra el objeto de chats correspondiente al ID deseado
//     const chatsObj = newChat.find(obj => obj.id == chatsId);

    
//     if (chatsObj) {
//       // Actualiza la propiedad "flag" en el objeto de chats encontrado
//       chatsObj.flag = nuevoValorFlag;
      
//       // Realiza la solicitud PATCH para actualizar solo el objeto de chats modificado
//       axios.patch(`${url}/${userId}`, { chats: newChat })
//         .then(response => {
//           console.log('El valor de "flag" se ha actualizado correctamente');
//         })
//         .catch(error => {
//           console.error('Error al actualizar el valor de "flag"', error);
//         });
//     } else {
//       console.error('No se encontró el objeto de chats con el ID especificado');
//     }
//   })
//   .catch(error => {
//     console.error('Error al obtener el objeto de conversación', error);
//   });

console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');




// // Manejador de evento para el click en sendOutline
// sendOutline.addEventListener('click', () => {
//   // Obtener el valor del input
//   const inputText = input.value;

//   // Obtener la hora actual usando Luxon
//   const currentTime = DateTime.local().toFormat('HH:mm');

//   // Realizar las acciones que desees con el valor del input y la hora actual

//   console.log('ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ');
//   console.log('Texto ingresado:', inputText);
//   console.log('Hora actual:', currentTime);
//   console.log('ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ');

//   // Limpiar el input después de capturar su valor
//   input.value = '';
// });


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
        home.classList.remove('hidden');
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