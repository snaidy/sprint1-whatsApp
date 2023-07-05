import axios from "axios";

const getlistChat = (userId) => {
  return new Promise((resolve, reject) => {
    const url = 'https://whatsapp-8lqf.onrender.com/conversation';

    axios.get(`${url}/${userId}`)
      .then(response => {
        const conversation = response.data;
        const newChat = conversation.chats;
        resolve(newChat); // Devuelve el valor newChat

        
      })
      .catch(error => {
        console.error('Error al obtener el objeto de conversación', error);
        reject(error); // Rechaza la promesa en caso de error
      });
  });
};

export default getlistChat;
