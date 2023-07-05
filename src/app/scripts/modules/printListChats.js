
const container = document.getElementById('alChatlist');
import { getuser } from "../services/getuser";
import swal from 'sweetalert2';
import printHeaderChat from "./printHeaderChat";
import printChat from "./printChat";
import sendMessage from "./sendMessage";
import editMessage from "./editMessage";
import { getConversations } from "../services/getConversations";
import patchVisto from "../services/patchVisto";
import postMessage from "../services/postMessage";
import deleteMessage from "../services/deleteMessage";
import axios from "axios";
import getlistChat from "../services/getlistChat";
import patchPerfil from "../services/patchPerfil";
import printPerfil from "./printPerfil";
import responsive from "./responsive";

const printListChats = async (endpoint) => 

{               

    try 
    {
        const array = await getConversations(endpoint);
        const idFriend = [];
        let indicateChat = 0;
        let idContact = 0;
        let idLastChat = 0;


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
        const listId = [];

        array.forEach(chat => {

            listConver.push(chat.chats);
            listId.push(chat.id);
            
        });
        const conver = [];

        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log(listId);
        console.log(listConver);
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');
        console.log('BBBBBBBBBBBBBBBBBBBBBBBBB');








        listConver.forEach((e, i) => 
        {
            
            e.forEach(async (l,index) => 
            {  

                console.log(i);
                
                const response = await getuser();

                //localStorage.setItem("usuariosRegistrados", JSON.stringify(response));
                let user = response.find(u => u.id == idFriend[i]);

                const sendOutline = document.getElementById('sendOutline');



                if (i == 0) 
                { 

                    printHeaderChat(user.image, user.name, user.flag);




                
                }

                if (i==0) 
                {
                    console.log("Estas son las conversaciones del primero: ");
                    console.log("KKKKKKKKKKKKKKKKKKKKKKKK");
                    console.log(e);
                    console.log("KKKKKKKKKKKKKKKKKKKKKKKK");    

                    printChat(e, endpoint, listId[0]);
                }


                const userImg = document.getElementById('fotoPerfil');
                const editProfileSection = document.querySelector('.edit-profile');
                const profileNameInput = document.getElementById('profileNameInput');
                const profileImageInput = document.getElementById('profileImageInput');
                const headerPerfil = document.querySelector('.header');
                const alChatlistPerfil = document.querySelector('.chatlist');
                userImg.addEventListener('click', () => {

                    headerPerfil.classList.add('hidden');
                    alChatlistPerfil.classList.add('hidden');
                    editProfileSection.style.display = 'block';
                    const UsuarioLogueado = JSON.parse(localStorage.getItem('UsuarioLogueado'));
                    profileNameInput.value = UsuarioLogueado.name;
                    profileImageInput.value = UsuarioLogueado.image;

                });
                
                
                
                const profileForm = document.querySelector('.profile-form');

                profileForm.addEventListener('submit', async (e) => {
                  e.preventDefault();
                
                  // Obtén los valores de los inputs de nombre y foto de perfil

                  const newName = profileNameInput.value;
                  const newImage = profileImageInput.value;
                
                  const newUser = await patchPerfil (endpoint, newName, newImage);

                  localStorage.setItem('UsuarioLogueado', JSON.stringify(newUser));
                  printPerfil(newImage);
                
                  // Vuelve a ocultar la sección de edición de perfil y mostrar la sección principal
                  editProfileSection.style.display = 'none';
                  headerPerfil.classList.remove('hidden');
                  alChatlistPerfil.classList.remove('hidden');
                });
                


                
                
                const backButton = document.querySelector('.back-button');
                backButton.addEventListener('click', () => {
                  editProfileSection.style.display = 'none';
                  headerPerfil.classList.remove('hidden');
                  alChatlistPerfil.classList.remove('hidden');

                });

                

                

                if(index==(e.length-1))
                {
                    let bValor = 0;

                    e.forEach((h, j) => 
                    {
                        if (h.sendBy == user.id) 
                        {
                            if (!h.flag) 
                            {
                                bValor++;
                            }    
                        }    
                    });



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
                    const bEstado = document.createElement('b');
                    bEstado.textContent = bValor;
                    e.forEach((h) => 
                    {
                        if (h.sendBy == user.id) 
                        {
                            if (!h.flag) 
                            {
                                
                                messageDiv.appendChild(bEstado);
                                p.className = 'chatlist__time unread';
                            }    
                        }    
                    });

                    // Añade los elementos al DOM
                    detailsSection.appendChild(headDiv);
                    detailsSection.appendChild(messageDiv);
                    section.appendChild(figure);
                    section.appendChild(detailsSection);
                    contenedor.appendChild(section);

                    
                    section.addEventListener('click', async () => 
                    {
                        idContact = i;


                        const input = document.getElementById('myInput');
                        input.value = '';

                        patchVisto(listId[i], user.id);

                        const elementos = document.querySelectorAll('.active');

                        indicateChat = user.id;

                        idLastChat = (l.id + 1);

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
                        


                        const ver = await getConversations(endpoint);;

                        ver.forEach(mensaje => 
                            {
                                if (mensaje.idUser1 == indicateChat || mensaje.idUser2 == indicateChat) 
                                {
                                    printChat(mensaje.chats, endpoint, listId[i]);

                                }    
                            });


                        


                            responsive();

                            


                        

                      });
   
                }

                
            });    


            



        });
        console.log('_____');

        console.log(conver);
        console.log('_____');    



        sendOutline.addEventListener('click', async () => 
        {
        

            let verId = await getlistChat(listId[idContact]);
            let idVer = idLastChat;

            verId.forEach((b, f) => 
            {
                if (f == (verId.length-1)) 
                {
                    idVer = (b.id+1);
                }
            });
            let newConver = sendMessage(endpoint, idVer);
            //postMessage (listId[idContact], newConver);

            let prueba = await postMessage (listId[idContact], newConver);


            

            prueba.forEach(c => 
            {
                
                    printChat(prueba, endpoint, listId[idContact]);
            
            });




           


          

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