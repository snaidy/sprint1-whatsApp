import axios from "axios";

const postMessage = (userId, mensaje) => {
  return new Promise((resolve, reject) => {
    const url = 'https://whatsapp-8lqf.onrender.com/conversation';

    axios.get(`${url}/${userId}`)
      .then(response => {
        const conversation = response.data;
        const newChat = conversation.chats;

        newChat.push(mensaje);

        axios.patch(`${url}/${userId}`, { chats: newChat })
          .then(response => {
            console.log('Se ha enviado el mensaje correctamente.');
            console.log(newChat);
            resolve(newChat); // Devuelve el valor newChat
          })
          .catch(error => {
            console.error('Error al enviar el mensaje.', error);
            reject(error); // Rechaza la promesa en caso de error
          });
      })
      .catch(error => {
        console.error('Error al obtener el objeto de conversación', error);
        reject(error); // Rechaza la promesa en caso de error
      });
  });
};

export default postMessage;
