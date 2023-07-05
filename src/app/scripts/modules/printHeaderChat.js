const printHeaderChat = (picture, name, statu) => {
    const contenedor = document.getElementById('header__up');
    contenedor.innerHTML = '';
  
    const span = document.createElement('span');
    span.className = 'imgtext';
  
    const figure = document.createElement('figure');
    figure.className = 'userimg';
    const img = document.createElement('img');
    img.src = picture;
    img.alt = 'perfil';
    img.className = 'cover';
    figure.appendChild(img);
  
    const h4 = document.createElement('h4');
    h4.textContent = name;
    const spanOnline = document.createElement('span');
    const s = statu ? 'Online' : 'Offline';
    spanOnline.textContent = s;
    h4.appendChild(document.createElement('br'));
    h4.appendChild(spanOnline);
  
    span.appendChild(figure);
    span.appendChild(h4);
  
    const nav = document.createElement('nav');
    nav.className = 'nav';
    const ul = document.createElement('ul');
    ul.className = 'nav__icon';
  
    const liSearch = document.createElement('li');
    const searchIcon = document.createElement('ion-icon');
    searchIcon.setAttribute('name', 'search-outline');
    liSearch.appendChild(searchIcon);
  
    const liEllipsis = document.createElement('li');
    const ellipsisIcon = document.createElement('ion-icon');
    ellipsisIcon.setAttribute('name', 'ellipsis-vertical');
    liEllipsis.appendChild(ellipsisIcon);
  
    const liBack = document.createElement('li');
    const backButton = document.createElement('button');
    backButton.textContent = 'Back';
    backButton.className = 'backButton';
    liBack.appendChild(backButton);
  
    ul.appendChild(liSearch);
    ul.appendChild(liEllipsis);
    ul.appendChild(liBack);

  
    nav.appendChild(ul);
    contenedor.appendChild(span);
    contenedor.appendChild(nav);
    backButton.addEventListener('click', () => {
        // Acción a ejecutar cuando se hace clic en el botón de retroceso
        console.log('Se ha hecho clic en el botón de retroceso');
        document.querySelector('.container__left').style.display = 'block';
        document.querySelector('.container__right').style.display = 'none';
        // Agrega aquí tu lógica personalizada
      });
  };
  
  export default printHeaderChat;
  