'use strict'


/* Write functions to: 
   Return the display of the string for a random person,
   Create a node and display the string that represents the person.
   Asynchronously handle the event.
   Add an event listener for the buttons.
*/


const directLinkOnClick = async () => {
   try{
      console.log('inside direct link')
      const element = document.getElementById('results-list')
      while (element.firstChild) {
         element.removeChild(element.firstChild);
       }

      
      const resp = await fetch('https://randomuser.me/api/')
      if(resp.status == 200){


         
         const content = await resp.json()
         const first_name = content['results'][0]['name']['first']
         const last_name = content['results'][0]['name']['last']
         const phone_number = content['results'][0]['phone']
         const email = content['results'][0]['email']

         const data_items = [first_name, last_name, phone_number, email]
         data_items.forEach( data_item => {
            // create a new div element
            const newP = document.createElement("li");
            newP.className = "collection-item"
            const newContent = document.createTextNode(`${data_item}`);
            newP.appendChild(newContent);
            const element = document.getElementById('results-list')
            element.appendChild(newP)
            }
         )
      }

   }catch(error){
      console.log(error)
   }

}


const expressLinkOnClick = async () => {
   console.log('inside express link')

}