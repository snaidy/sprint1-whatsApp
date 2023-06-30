
import swal from 'sweetalert2';
import { getuser } from '../services/getuser.js';

const validateLoguin = async (phoneNumber, password) => {
    try {
      const response = await getuser()
    // Buscar el usuario ingresado por número de celular y contraseña
      const user = response.find(u => u.number === phoneNumber && u.password === password);
  
      if (user) {
        // Si se encuentra el usuario, mostrar mensaje de bienvenida y mandar al usuario a la página home
        // alert('Bienvenido ' + user.name);
        // window.location.href = 'home.html'; // aqui se puede cambiar 'home.html' con la ruta que yo quiera
        const mensaje = 'Bienvenido, ' + user.name + '.';
        const numero = 'Tú número de teléfono es: ' + user.number;
        swal.fire({
          title: mensaje,
          text: numero,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          // Redirigir a la página 'home.html' después de hacer clic en el botón 'Aceptar'
 
          const home = document.getElementById('home');
          const loguinDiv = document.getElementById('loguin');

          loguinDiv.classList.add('hidden');
          home.classList.remove('hidden');

        });
      } else {
        // Si no se encuentra el usuario, mostrar mensaje de error
        swal.fire({
          title:'Se ha producido un error.',
          text: 'El número de celular o la contraseña ingresada es incorrecta.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
        
      }
    } catch (error) {
      swal.fire({
        title:'Se ha producido un error.',
        text: 'Error al obtener los datos de la API:', error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
      
    }
  };

  export default validateLoguin;