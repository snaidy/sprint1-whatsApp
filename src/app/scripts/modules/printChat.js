const printChat = (array, endpoint) => {
    const contenedor = document.getElementById('chatMain');
    contenedor.innerHTML = '';
  
    array.forEach((message, index) => {
      const divMe = document.createElement('div');
      if (message.sendBy === endpoint) {
        divMe.className = 'message me';
  
       
          const optionsBox = createOptionsBox(); // Crea la caja de opciones
          divMe.appendChild(optionsBox); // Agrega la caja de opciones al mensaje
        
      } else {
        divMe.className = 'message friend';
      }
  
      divMe.setAttribute('data-id', index + 1);
  
      const pMe = document.createElement('p');
      pMe.textContent = message.message;
      const spanMe = document.createElement('span');
  
      if (message.sendBy === endpoint) {
        if (message.flag) {
          spanMe.className = 'visto yes';
        } else {
          spanMe.className = 'visto';
        }
      }
  
      spanMe.textContent = message.hour;
      pMe.appendChild(document.createElement('br'));
      pMe.appendChild(spanMe);
      divMe.appendChild(pMe);
  
      contenedor.appendChild(divMe);
    });
  };
  
  // Función para crear la caja de opciones
  const createOptionsBox = () => {
    const optionsBox = document.createElement('div');
    optionsBox.className = 'options-box';
  
    const deleteOption = document.createElement('a');
    deleteOption.href = '#';
    deleteOption.className = 'delete-option';
    deleteOption.textContent = 'Eliminar';
  
    const editOption = document.createElement('a');
    editOption.href = '#';
    editOption.className = 'edit-option';
    editOption.textContent = 'Editar';
  
    optionsBox.appendChild(deleteOption);
    optionsBox.appendChild(editOption);
  
    return optionsBox;
  };
  
  export default printChat;
  













// const printChat = (array, endpoint) =>{

// const contenedor = document.getElementById('chatMain');

// contenedor.innerHTML='';
//     array.forEach((message, index) => 
//         {


        
//             // Crea el primer elemento div con la clase "message me"
//             const divMe = document.createElement('div');
//             if (message.sendBy == endpoint) 
//             {
//                 divMe.className = 'message me';


//             }
//             else
//             {
//                 divMe.className = 'message friend';
//             }

//             divMe.setAttribute('data-id', (index+1));
            
//             const pMe = document.createElement('p');
//             pMe.textContent = message.message;
//             const spanMe = document.createElement('span');

            
      

//             if (message.sendBy == endpoint) 
//             {
//                 if (message.flag) 
//                 {
//                     spanMe.className = 'visto yes';
//                 } else 
//                 {
//                     spanMe.className = 'visto';    
//                 }


//             }

            



            
//             spanMe.textContent = message.hour;
//             pMe.appendChild(document.createElement('br'));
//             pMe.appendChild(spanMe);
//             divMe.appendChild(pMe);
        
//             contenedor.appendChild(divMe);
        
//         });

// }


// export default printChat;