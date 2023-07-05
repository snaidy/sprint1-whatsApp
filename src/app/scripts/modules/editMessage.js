const editMessage = () => 
{
    // Seleccionar todos los contenedores de mensaje con la clase secundaria "me"
    const messageContainers = document.querySelectorAll('.message.me');

    // Agregar el listener de eventos a cada contenedor de mensaje
    messageContainers.forEach(container => {
    container.addEventListener('dblclick', () => {
         
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log('Has hecho doble clic en este mensaje.');
        //console.log(mensaje);
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        // Realizar la acción deseada aquí
    });
    });

}

export default editMessage;