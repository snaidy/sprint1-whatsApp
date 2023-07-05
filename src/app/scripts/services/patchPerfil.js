

import axios from "axios";

const patchPerfil = (userId, name, foto) => {
  return new Promise((resolve, reject) => {
    const url = 'https://whatsapp-8lqf.onrender.com/user';

    axios.get(`${url}/${userId}`)
      .then(response => {
        const user = response.data;
        user.name = name;
        user.image = foto;

        axios.patch(`${url}/${userId}`, user)
          .then(response => {
            console.log('Se ha actualizado la información correctamente.');
  
            resolve(user); // Devuelve el valor newChat
          })
          .catch(error => {
            console.error('Error subir cambios.', error);
            reject(error); // Rechaza la promesa en caso de error
          });
      })
      .catch(error => {
        console.error('Error al obtener el usuario', error);
        reject(error); // Rechaza la promesa en caso de error
      });
  });
};

export default patchPerfil;
