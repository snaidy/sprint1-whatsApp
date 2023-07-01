
const figure = document.getElementById('fotoPerfil');

const printPerfil = (foto) => {




    const image = document.createElement('img');
    image.src = foto;
    image.alt = 'Perfil';
    image.classList.add('cover');
    figure.appendChild(image);
    
}

export default printPerfil;

