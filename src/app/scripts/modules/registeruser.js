// import { getuser } from '../services/getuser.js';
import getUserByPhone from "../services/getUserByPhone.js";
import swal from 'sweetalert2';
import { postU } from "../services/postuser.js";

import axios from "axios";
const url = 'https://whatsapp-8lqf.onrender.com/user';

const registro = document.getElementById('registro');

const registrar = () => {
    registro.addEventListener('submit', async(e)=>{
        e.preventDefault();
    
        const name = document.getElementById('name');
        const phoneNumber = document.getElementById('phone');

        const password = document.getElementById('password').value;
        const password = document.getElementById('passwordRegister');
        const imageUrl = document.getElementById('image');
        const message = document.getElementById('message');
        //voy a validar campos vacios
        // if (name === '' || phoneNumber === '' || password === '' || imageUrl === '' || message === '') {
        //     alert('Por favor, complete todos los campos.');
        //     return;
        //   }


        
        console.log(password);
    

        console.log('contraseña', password);
        

        const newUser = {
            name: name.value,
            number: phoneNumber.value,
            password: password.value,
            image: imageUrl.value,
            info: message.value,
            ConectionLast: "Ayer",
            flag:false
            };
            console.log(newUser);
            
          const usuarioRegistrado = await validarPhoneNumberExistentes(
            phoneNumber.value
          );
      console.log('numero', phoneNumber.value)
      console.log(usuarioRegistrado);
            
          if (usuarioRegistrado) {

            // alert("puedes crear el usuario");
            //alerta que el usuario ya esta registrado post
            swal.fire({
              title:'Se puede crear este usuario.',
              text: 'Puedes ingresar',
              icon: 'success',
              confirmButtonText: 'Aceptar'

            }).then(() => {
              axios.post(url, newUser)
              .then(response => {
                console.log('Usuario agregado:', response.data);
              })
              .catch(error => {
                console.error('Error al agregar el usuario:', error);
              });

              
              
    
            });

            })
            postU(newUser);

            
          } else {
              swal.fire({
              title:'Se ha producido un error.',
              text: 'No se puede crear el usuario por que ya existe en la data.',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            })
          }
          //else if(!usuarioRegistrado){
        //     if (name === '' || phoneNumber === '' || password === '' || imageUrl === '' || message === '') {
        //     alert('Por favor, complete todos los campos.');
            
        //     }else{
        //         console.log('el usuario se esta registrando exitosamente');
        //         //llamar el metodo post
        //     }
        //   }
        //   try {
        //     // Obtener la lista de usuarios
        //     const users = await getuser();
        //     console.log(users)
        //     // Verificar si el número de celular ya está registrado
        //     const userExists = users.some(user => user.number === phoneNumber);
        
        //     if (userExists) {
        //       console.log('El número de celular ingresado ya está registrado.');
        //     } else {
        //       // Crear nuevo usuario
        //       const newUser = {
        //         id: 
        //         name,
        //         number: phoneNumber,
        //         password,
        //         image,
        //         info
        //       };
        
        //       // Agregar nuevo usuario a la lista
        //     //   users.push(newUser);
        
              
        //       console.log('Nuevo usuario creado exitosamente:', newUser);
        //     }
        //   } catch (error) {
        //     console.log('Error al obtener la lista de usuarios:', error);
        //   }
          
    
    })
}



const validarPhoneNumberExistentes = async (phoneNumber) => {
  const usuarioExistente = await getUserByPhone(phoneNumber);
  if (Object.entries(usuarioExistente).length) {
    // alert("Este número celular ya existe, por favor inicie sesión");
    swal.fire({
      title:'Se ha producido un error.',
      text: 'Este número celular ya existe, por favor inicie sesión.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
    
    return false;
  } else {
    return true;
  }
    
}

export default registrar;

