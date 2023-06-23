import axios from 'axios';
const validateCredentials = async (phoneNumber, password, url) => {
    try {
      const response = await axios.get(url);
      const users = response.data;
      
      // Buscar el usuario ingresado por número de celular y contraseña
      const user = users.find(u => u.number === phoneNumber && u.password === password);
  
      if (user) {
        // Si se encuentra el usuario, mostrar mensaje de bienvenida y redireccionar al usuario a la página home
        alert('Bienvenido ' + user.name);
        window.location.href = 'home.html'; // Reemplaza 'home.html' con la ruta de tu página home
      } else {
        // Si no se encuentra el usuario, mostrar mensaje de error
        alert('El número de celular o la contraseña ingresada es incorrecta.');
      }
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };

  export default validateCredentials;