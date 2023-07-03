
const foto = document.getElementById('userimg');

const printHeaderChat = (picture, name, statu) =>{

        // Obtén el elemento contenedor donde deseas añadir las sentencias de HTML
            const contenedor = document.getElementById('header__up');

            contenedor.innerHTML='';

            // Crea un nuevo elemento span
            const span = document.createElement('span');
            span.className = 'imgtext';

            // Crea el elemento figure y su contenido
            const figure = document.createElement('figure');
            figure.className = 'userimg';
            const img = document.createElement('img');
            img.src = picture;
            img.alt = 'perfil';
            img.className = 'cover';
            figure.appendChild(img);

            // Crea el elemento h4 y su contenido
            const h4 = document.createElement('h4');
            h4.textContent = name;
            const spanOnline = document.createElement('span');

            const s = 'OffLine';

            if (statu) 
            {
                s = 'Online'    
            }
            spanOnline.textContent = s;
            h4.appendChild(document.createElement('br'));
            h4.appendChild(spanOnline);

            // Añade los elementos al span
            span.appendChild(figure);
            span.appendChild(h4);

            // Crea el elemento nav y su contenido
            const nav = document.createElement('nav');
            nav.className = 'nav';
            const ul = document.createElement('ul');
            ul.className = 'nav__icon';

            // Crea los elementos li y su contenido
            const liSearch = document.createElement('li');
            const searchIcon = document.createElement('ion-icon');
            searchIcon.setAttribute('name', 'search-outline');
            liSearch.appendChild(searchIcon);

            const liEllipsis = document.createElement('li');
            const ellipsisIcon = document.createElement('ion-icon');
            ellipsisIcon.setAttribute('name', 'ellipsis-vertical');
            liEllipsis.appendChild(ellipsisIcon);

            // Añade los elementos li al ul
            ul.appendChild(liSearch);
            ul.appendChild(liEllipsis);

            // Añade el ul al nav
            nav.appendChild(ul);

            // Añade los elementos al contenedor
            contenedor.appendChild(span);
            contenedor.appendChild(nav);




}

export default printHeaderChat;
