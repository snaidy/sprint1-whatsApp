const responsive = () => 
{
      // Verifica si la vista es mobile
    // Verifica si la vista es mobile
    if (window.innerWidth <= 768) {
        // Muestra el contenedor derecho y oculta el izquierdo
        document.querySelector('.container__left').style.display = 'none';
        document.querySelector('.container__right').style.display = 'block';
        //document.querySelector('.back-button').style.display = 'block';
      } else {
        // Muestra ambos contenedores
        document.querySelector('.container__left').style.display = 'block';
        document.querySelector('.container__right').style.display = 'block';
        //document.querySelector('.back-button').style.display = 'none';

      }
}

export default responsive;