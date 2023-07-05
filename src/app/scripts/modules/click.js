import printChat from "./printChat";
import deleteMessage from "../services/deleteMessage";
import patchMessage from "../services/patchMessage";


const click = (prueba, idMensaje, endpoint) =>
{
                    const messageContainers = document.querySelectorAll('.message.me');

                    // Agregar el listener de eventos a cada contenedor de mensaje
                    messageContainers.forEach(container => {
                    container.addEventListener('dblclick', (event) => {
                        let editMensaje = '';
                        const valorAtributo = container.getAttribute('data-id');


                                

                                prueba.forEach(t => 
                                {
                                    if (t.id == valorAtributo) 
                                    {
                                        editMensaje = t.message;
                                    }    
                                });
                            
                        const optionsBox = container.querySelector('.options-box');

                        // Alterna la visibilidad de la caja de opciones al hacer clic en el mensaje
                        optionsBox.style.display = optionsBox.style.display === 'block' ? 'none' : 'block';   
                                                // Escuchar clics en el enlace "Eliminar"
                        const deleteOption = optionsBox.querySelector('.delete-option');
                        deleteOption.addEventListener('click', async () => {
                        // Realizar la acción de eliminar aquí
                        console.log('Has hecho clic en Eliminar al mensaje:  ' + editMensaje);
                        let chatDeletn = await deleteMessage(idMensaje,valorAtributo);
                        console.log('Eliminado el chat con id: ' + idMensaje + ' de  la conversación: ' + valorAtributo )
                        printChat(chatDeletn, endpoint,idMensaje );
                        });

                        // Escuchar clics en el enlace "Editar"
                        const editOption = optionsBox.querySelector('.edit-option');
                        const inputEdit = container.querySelector('.edit-input');
                        const saveButton = container.querySelector('.save-button');
                        editOption.addEventListener('click', () => 
                        {
                            optionsBox.style.display = 'none';
                            // Realizar la acción de editar aquí
                            console.log('Has hecho clic en Editar al mensaje:  ' + editMensaje);  
                            // Mostrar el input y el botón de guardar
                            inputEdit.style.display = 'inline-block';
                            saveButton.style.display = 'inline-block';
                          
                            // Establecer el valor del input al mensaje original
                            inputEdit.value = editMensaje;

                            
                        }); 
                        
                        // Escuchar clics en el botón "Guardar"

                      
                        saveButton.addEventListener('click', async () => {
                          // Obtener el nuevo valor del input
                          const nuevoMensaje = inputEdit.value;
                        

                          const editedMessage = await patchMessage(idMensaje, valorAtributo, nuevoMensaje);
                          printChat(editedMessage, endpoint,idMensaje );
                          // Realizar la acción de guardar/actualizar el mensaje aquí
                          console.log('Mensaje original:', editMensaje);
                          console.log('Mensaje modificado:', nuevoMensaje);
                        
                          // Ocultar el input y el botón de guardar nuevamente
                          inputEdit.style.display = 'none';
                          saveButton.style.display = 'none';
                        });

                        
                        // console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
                        // console.log('Has hecho doble clic en el mensaje: ' + editMensaje + '. ');
                        // //console.log(mensaje);
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
                        // Realizar la acción deseada aquí
                    });
                    });
}

export default click;