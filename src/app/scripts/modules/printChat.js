

const printChat = (array, endpoint) =>{

const contenedor = document.getElementById('chatMain');

contenedor.innerHTML='';
    array.forEach(message => 
        {

        
            // Crea el primer elemento div con la clase "message me"
            const divMe = document.createElement('div');
            if (message.sendBy == endpoint) 
            {
                divMe.className = 'message me';


            }
            else
            {
                divMe.className = 'message friend';
            }
            
            const pMe = document.createElement('p');
            pMe.textContent = message.message;
            const spanMe = document.createElement('span');

            if (message.sendBy == endpoint) 
            {
                if (message.flag) 
                {
                    spanMe.className = 'visto yes';
                } else 
                {
                    spanMe.className = 'visto';    
                }


            }




           
            spanMe.textContent = message.hour;
            pMe.appendChild(document.createElement('br'));
            pMe.appendChild(spanMe);
            divMe.appendChild(pMe);
        
            contenedor.appendChild(divMe);
        
        });

}


export default printChat;