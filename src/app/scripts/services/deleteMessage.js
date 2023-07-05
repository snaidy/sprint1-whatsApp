// import axios from "axios";

// const deleteMessage = (conversationId, objectId ) => 

// {


//     // URL del endpoint específico
//     const url = `https://whatsapp-8lqf.onrender.com/conversation/${conversationId}`;

//     // Obtener la conversación actual
//     axios.get(url)
//     .then(response => {
//         const conversation = response.data;

//         // Filtrar el arreglo "chats" y excluir el objeto con el ID especificado
//         const updatedChats = conversation.chats.filter(chat => chat.id !== objectId);

//         // Actualizar el arreglo "chats" en la conversación
//         conversation.chats = updatedChats;

//         // Realizar la solicitud PATCH para actualizar la conversación
//         axios.patch(url, conversation)
//         .then(response => {
//             console.log('Objeto eliminado correctamente');
//         })
//         .catch(error => {
//             console.error('Error al eliminar el objeto:', error);
//         });
//     })
//     .catch(error => {
//         console.error('Error al obtener la conversación:', error);
//     });


// }

// export default deleteMessage;




















import axios from "axios";

const deleteMessage = (userId, mensaje) => {
  return new Promise((resolve, reject) => {
    const url = 'https://whatsapp-8lqf.onrender.com/conversation';

    axios.get(`${url}/${userId}`)
      .then(response => {
        let d = 0;
        const conversation = response.data;
        const arrayChat = conversation.chats;
        console.log('El chat que se quiso eliminar fue: ' + mensaje);
        let updatedChats = [];

        arrayChat.forEach(e => 
        {
        
            if (e.id == mensaje) 
            {
                 d = 1;
            }
            else 
            {
                updatedChats.push(e);
            }

        });
        console.log(updatedChats);
        
        conversation.chats = updatedChats;


      

        axios.patch(`${url}/${userId}`, conversation)
          .then(response => {
            console.log('Se ha eliminado el mensaje correctamente.');
            console.log(updatedChats);
            resolve(updatedChats); 
          })
          .catch(error => {
            console.error('Error al eliminar el mensaje.', error);
            reject(error); // Rechaza la promesa en caso de error
          });
      })
      .catch(error => {
        console.error('Error al obtener la conversación', error);
        reject(error); // Rechaza la promesa en caso de error
      });
  });
};

export default deleteMessage;
