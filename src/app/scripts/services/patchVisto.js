import axios from "axios";
const patchVisto = (userId, chatsId) => 
{


    const url = 'https://whatsapp-8lqf.onrender.com/conversation';

    // ID del usuario y del objeto "chats" que deseas modificar
    // const userId = 6;
    // const chatsId = 2;

    // Nuevo valor para la propiedad "flag"


    // Realiza la solicitud GET para obtener el objeto de conversación actual
    axios.get(`${url}/${userId}`)
    .then(response => {
        const conversation = response.data;

        const newChat = conversation.chats;






        newChat.forEach(y => 
        {
            if (y.sendBy == chatsId) 
            {
                y.flag = true;      
            }  
        });

        
        // Realiza la solicitud PATCH para actualizar solo el objeto de chats modificado
        axios.patch(`${url}/${userId}`, { chats: newChat })
            .then(response => {
            console.log('El valor de "flag" se ha actualizado correctamente');
            })
            .catch(error => {
            console.error('Error al actualizar el valor de "flag"', error);
            });
        
    })
    .catch(error => {
        console.error('Error al obtener el objeto de conversación', error);
    });

}

export default patchVisto;