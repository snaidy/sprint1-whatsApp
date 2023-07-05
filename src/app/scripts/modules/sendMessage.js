

import { DateTime } from 'luxon';



const input = document.getElementById('myInput');
// Manejador de evento para el click en sendOutline


const sendMessage = (endpoint, point) => {

    const newMessage = [];
    const mensaje = {};

            // Obtener el valor del input
            const inputText = input.value;
      
            // Obtener la hora actual usando Luxon
            const currentTime = DateTime.local().toFormat('HH:mm');
    
            const currentDate = DateTime.local().toFormat('DD/MM/YYYY');
            const parts = currentDate.split('/');
            const formattedDate = `${parts[0].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[2]}`;
    
    
          
            // Realizar las acciones que desees con el valor del input y la hora actual
          
            // console.log('ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ');
            // console.log('Texto ingresado:', inputText);
            // console.log('Hora actual:', currentTime);
            // console.log('ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ');
            mensaje.id = point;
            mensaje.sendBy = endpoint;
            mensaje.date = formattedDate;
            mensaje.hour = currentTime;
            mensaje.message = inputText;
            mensaje.flag = false;
            newMessage.push(mensaje);
          
            
            // Limpiar el input después de capturar su valor
            
            console.log('pppppppppppppppppp');

            console.log('Enviado con id: ' + point)
            console.log(mensaje);
    
            console.log('rrrrrrrrrrrrrrrrrrrr');
            input.value = '';
            return mensaje;



}

export default sendMessage;