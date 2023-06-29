// import { getuser } from '../services/getuser.js';
import getUserByPhone from "../services/getUserByPhone.js";

const registro = document.getElementById('registro');

const registrar = () => {
    registro.addEventListener('submit', async(e)=>{
        e.preventDefault();
    
        const name = document.getElementById('name');
        const phoneNumber = document.getElementById('phone');
        const password = document.getElementById('password');
        const imageUrl = document.getElementById('image');
        const message = document.getElementById('message');
        //voy a validar campos vacios
        // if (name === '' || phoneNumber === '' || password === '' || imageUrl === '' || message === '') {
        //     alert('Por favor, complete todos los campos.');
        //     return;
        //   }
    
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
            alert("puedes crear el usuario");
            //alerta que el usuario ya esta registrado post
          } else {
            alert("No se puede crear el usuario por que ya existe en la data");
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
    alert("Este número celular ya existe, por favor inicie sesión");
    return false;
  } else {
    return true;
  }
    
}

export default registrar;

