// import { getuser } from "../services/getuser";
// import swal from 'sweetalert2';

// const printListChats = async (array, endpoint) => {
//   try {
//     const idFriend = [];
//     array.forEach((con) => {
//       if (con.idUser1 !== endpoint) {
//         idFriend.push(con.idUser1);
//       }
//       if (con.idUser2 !== endpoint) {
//         idFriend.push(con.idUser2);
//       }
//     });

//     console.log('_____');
//     console.log(idFriend);
//     console.log('_____');

//     const listConver = [];
//     array.forEach((chat) => {
//       listConver.push(chat.chats);
//     });

//     const conver = [];
//     for (let i = 0; i < listConver.length; i++) {
//       const e = listConver[i];
//       for (let j = 0; j < e.length; j++) {
//         const l = e[j];
//         if (j === e.length - 1) {
//           const response = await getuser();
//           const user = response.find((u) => u.id === j);
//           conver.push(l.message);

//           const contenedor = document.getElementById('alChatlist');
//           const section = document.createElement('section');
//           section.className = 'chatlist__block';

//           const figure = document.createElement('figure');
//           figure.className = 'chatlist__img';
//           const img = document.createElement('img');
//           img.src = user.image;
//           img.alt = 'Imagen de Chat';
//           img.className = 'cover';
//           figure.appendChild(img);

//           const detailsSection = document.createElement('section');
//           detailsSection.className = 'chatlist__details';

//           const headDiv = document.createElement('div');
//           headDiv.className = 'chatlist__head';
//           const h4 = document.createElement('h4');
//           h4.textContent = user.name;
//           const p = document.createElement('p');
//           p.className = 'chatlist__time';
//           p.textContent = l.hour;
//           headDiv.appendChild(h4);
//           headDiv.appendChild(p);

//           const messageDiv = document.createElement('div');
//           messageDiv.className = 'chatlist__message';
//           const pEstado = document.createElement('p');
//           pEstado.className = 'estado';
//           pEstado.textContent = l.message;
//           messageDiv.appendChild(pEstado);

//           detailsSection.appendChild(headDiv);
//           detailsSection.appendChild(messageDiv);
//           section.appendChild(figure);
//           section.appendChild(detailsSection);
//           contenedor.appendChild(section);
//         }
//       }
//     }

//     console.log('_____');
//     console.log(conver);
//     console.log('_____');
//   } catch (error) {
//     swal.fire({
//       title: 'Se ha producido un error.',
//       text: `Error al obtener los datos de la API: ${error}`,
//       icon: 'error',
//       confirmButtonText: 'Aceptar',
//     });
//   }
// };

// export default printListChats;






const container = document.getElementById('alChatlist');
import { getuser } from "../services/getuser";
import swal from 'sweetalert2';
import printHeaderChat from "./printHeaderChat";
import printChat from "./printChat";
import sendMessage from "./sendMessage";

const printListChats =  (array, endpoint) => 

{               

    try 
    {
        const idFriend = [];
        let indicateChat = 0;


        array.sort(function(a, b) {
            // Obtiene la última hora de cada objeto padre
            var ultimaHoraA = a.chats[a.chats.length - 1].hour;
            var ultimaHoraB = b.chats[b.chats.length - 1].hour;
          
            // Compara las últimas horas en orden descendente
            return new Date("1970/01/01 " + ultimaHoraB) - new Date("1970/01/01 " + ultimaHoraA);
          });
          
          console.log('OOOOOOOOOOOOOOO');
          console.log(array);
          console.log('OOOOOOOOOOOOOOO');

               
        array.forEach(con => 
        {
            if (con.idUser1 != endpoint )
            {
                idFriend.push(con.idUser1);
            }    
            if (con.idUser2 != endpoint )
            {
                idFriend.push(con.idUser2);
            }
        }); 

        
        console.log('_____');
        console.log(idFriend);
        console.log('_____');

        const listConver = [];

        array.forEach(chat => {

            listConver.push(chat.chats);
            
        });
        const conver = [];







        listConver.forEach((e, i) => 
        {
            
            e.forEach(async (l,index) => 
            { 
                console.log(i);
                
                const response = await getuser();

                localStorage.setItem("usuariosRegistrados", JSON.stringify(response));
                let user = response.find(u => u.id == idFriend[i]);

                const sendOutline = document.getElementById('sendOutline');



                if (i == 0) 
                { const status = 'Offline'
                    if (user.flag) 
                    {
                        status = 'Online'
                    }
                        

                    const header = document.getElementById('header__up');

                    header.innerHTML='';
            
                    header.innerHTML=`
                    <span class="imgtext">
                    <figure class="userimg">
                        <img src=${user.image} alt="perfil" class="cover">
                    </figure>
                    <h4>${user.name} <br><span>${status}</span></h4>
                </span>
            
                
            
                <nav class="nav">
                    <ul class="nav__icon">
                        
                        <li><ion-icon name="search-outline"></ion-icon></li>
                        <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                    </ul>
                </nav>
                    `    




                
                }

                if (i==0) 
                {
                    console.log("Estas son las conversaciones del primero: ");
                    console.log("KKKKKKKKKKKKKKKKKKKKKKKK");
                    console.log(e);
                    console.log("KKKKKKKKKKKKKKKKKKKKKKKK");    

                    printChat(e, endpoint);
                }


                



                if(index==(e.length-1))
                {



                    conver.push(l.message);
                    

                    // Obtén el elemento contenedor donde deseas añadir las sentencias de HTML
                    const contenedor = document.getElementById('alChatlist');

                    // Crea un nuevo elemento section
                    const section = document.createElement('section');
                    section.className = 'chatlist__block';

                    // Crea el elemento figure y su contenido
                    const figure = document.createElement('figure');
                    figure.className = 'chatlist__img';
                    const img = document.createElement('img');
                    img.src = user.image;
                    img.alt = 'Imagen de Chat';
                    img.className = 'cover';
                    figure.appendChild(img);

                    // Crea el elemento section para los detalles del chat
                    const detailsSection = document.createElement('section');
                    detailsSection.className = 'chatlist__details';

                    // Crea el div para la cabecera
                    const headDiv = document.createElement('div');
                    headDiv.className = 'chatlist__head';
                    const h4 = document.createElement('h4');
                    h4.textContent = user.name;
                    const p = document.createElement('p');
                    p.className = 'chatlist__time';
                    p.textContent = l.hour;
                    headDiv.appendChild(h4);
                    headDiv.appendChild(p);

                    // Crea el div para el mensaje
                    const messageDiv = document.createElement('div');
                    messageDiv.className = 'chatlist__message';
                    const pEstado = document.createElement('p');
                    if (l.sendBy==endpoint) 
                    {
                        pEstado.className = 'estado';  

                        if (l.flag) 
                        {
                            pEstado.className = 'estado yes';    
                        }
                    }
                    
                    pEstado.textContent = l.message;
                    messageDiv.appendChild(pEstado);

                    // Añade los elementos al DOM
                    detailsSection.appendChild(headDiv);
                    detailsSection.appendChild(messageDiv);
                    section.appendChild(figure);
                    section.appendChild(detailsSection);
                    contenedor.appendChild(section);

                    
                    section.addEventListener('click', () => 
                    {
                        const input = document.getElementById('myInput');
                        input.value = '';
                        const vistoMe = JSON.parse(localStorage.getItem(`conversations_User_${endpoint}`));
                        const vistoFriend = JSON.parse(localStorage.getItem(`conversations_User_${user.id}`));

                        vistoMe.forEach(estado => 
                        {
                            if (estado.idUser1 == user.id || estado.idUser2 == user.id) 
                            {
                                const chatVisto = estado.chats;

                                chatVisto.forEach(t => 
                                {   
                                    if (t.sendBy == user.id) 
                                    {
                                        //pEstado.classList.add('yes');
                                        t.flag = true;

        
                                    }    
                                });
                            }

                            
                        });


                        vistoFriend.forEach(estado => 
                            {
                                if (estado.idUser1 == endpoint || estado.idUser2 == endpoint) 
                                {
                                    const chatVisto = estado.chats;
    
                                    chatVisto.forEach(t => 
                                    {   
                                        if (t.sendBy == user.id) 
                                        {
                                            //pEstado.classList.add('yes');
                                            t.flag = true;
    
            
                                        }    
                                    });
                                }
    
                                
                            });



                        localStorage.setItem(`conversations_User_${endpoint}`, JSON.stringify(vistoMe));
                        localStorage.setItem(`conversations_User_${user.id}`, JSON.stringify(vistoFriend));

                        console.log("+++++++++++++++++++++++++++++++++++++");
                        console.log(JSON.parse(localStorage.getItem(`conversations_User_${user.id}`)));
                        console.log("+++++++++++++++++++++++++++++++++++++");


                        const elementos = document.querySelectorAll('.active');

                        indicateChat = user.id;

                        elementos.forEach(elem => 
                        {
                            elem.classList.remove('active');
                        });

                        section.className = 'chatlist__block active';    
                        
                        printHeaderChat(user.image, user.name, user.flag);
                        console.log('Haz dado Click sobre el Chat de ' + user.name + '.');
                        console.log('                                                   ');
                        console.log('Sus conversaciones son: ');
                        console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCC');

                        console.log(e);
                        console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCC');

                        printChat(e, endpoint);

                      });
   
                }
                
            });    


            



        });
        console.log('_____');

        console.log(conver);
        console.log('_____');    



        sendOutline.addEventListener('click', () => {
    
           
            let newConver = sendMessage(endpoint, indicateChat);

            let arrayCon = JSON.parse(localStorage.getItem(`conversations_User_${endpoint}`));
            let pruebaTwo = JSON.parse(localStorage.getItem(`conversations_User_${indicateChat}`));

            console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
            console.log(newConver);  
            console.log("GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");



            arrayCon.forEach(mensaje => 
            {
                if (mensaje.idUser1 == indicateChat || mensaje.idUser2 == indicateChat) 
                {
                    console.log("Nuevo mensaje Agregado.");   
                    console.log(newConver);   
                    mensaje.chats.push(newConver);
                    console.log("Nuevo mensaje Agregado.");    
                }    
            });

            pruebaTwo.forEach(mensaje => 
                {
                    if (mensaje.idUser1 == endpoint || mensaje.idUser2 == endpoint) 
                    {
                        console.log("Nuevo mensaje Agregado.");   
                        console.log(newConver);   
                        mensaje.chats.push(newConver);
                        console.log("Nuevo mensaje Agregado.");    
                    }    
                });

            localStorage.setItem(`conversations_User_${endpoint}`, JSON.stringify(arrayCon));
            localStorage.setItem(`conversations_User_${indicateChat}`, JSON.stringify(pruebaTwo));

            let prueba = JSON.parse(localStorage.getItem(`conversations_User_${endpoint}`));
            
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            console.log(prueba);  
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

            prueba.forEach(c => 
            {
                if (c.idUser1 == indicateChat || c.idUser2 == indicateChat) 
                {
                    printChat(c.chats, endpoint);
                }
            });


           

            // console.log("Los Usuarios son: ");
            // console.log(JSON.parse(localStorage.getItem("usuariosRegistrados")));
          

        });
    } 
    catch (error) 
    {
        swal.fire({
            title:'Se ha producido un error.',
            text: 'Error al obtener los datos de la API:', error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });    
    }

    
}

export default printListChats;