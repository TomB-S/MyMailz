// -- Ajout message avec input
  // au click
  document.querySelector('#btn-add').addEventListener('click',
    function() {
      const message = document.querySelector('#add-message').value;
      console.log(message);

      // ajouter nouveau message 
      const newMessage = `
      <div class="row new-row">
                <img class="avatar" src="images/avatar-1.jpg" />
                <div class="text-container">
                  <h6>Tom B</h6>
                  <p>${message}</p>
                </div>
                <span class="delete">✖</span>
              </div>
      `;
      document.querySelector('#msg-container').innerHTML += newMessage;
      document.querySelector('#add-message').value = '';

       //-- Mettre en place le compteur
          // je cible puis compte le nb de messages (od & new)
      const countMessage = document.querySelectorAll('p').length;
      console.log(countMessage)
          // je modifie le compteur 
      document.querySelector('#count').textContent = countMessage; 
   
      // -- Supprimer messages 
      const deleteMessages = document.querySelectorAll('.delete');
      for(let i=0; i<deleteMessages.length; i++){
        deleteMessages[i].addEventListener('click',
          function() {
            this.parentNode.remove(); // je supprime le message
            const countMessage = document.querySelectorAll('p').length //recalculer nb mess
            document.querySelector('#count').textContent = countMessage;
          }
        )
      }
    }
  )



  //-- créer date 
  let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}



// AJout de la date et heure    
    // je crée une new var 
const date = new Date();
    // j udpdate la date en utilisant ma var  
document.querySelector('#footer').innerHTML += `
<span id="date">${date}</span>
`


// -- Ajout moteur de recherche 
  // écoute btn search
const clickSearch = document.querySelector('#btn-search').addEventListener('click',
  function() {
    const textToCompare = document.querySelector('#search-message').value.toLowerCase();
    console.log(textToCompare)

    // recup tous messages 
    const message = document.querySelectorAll('.row');
    
    // parcourir cjaque message
    for (let i = 0; i <message.length; i++) {
      const addMessage = message[i]; // cibler l'élement actue du message 

      // recup lee nom dans ce message 
      const name = addMessage.querySelector('h6').textContent.toLowerCase();

      //compare texte recherche avec nom 
      if (name.includes(textToCompare) === true) {
        addMessage.style.display = ''; // Afficher le message si la recherche correspond
      }
      else {
        addMessage.style.display = 'none'; // Masque si ne correspond pas 
      }
    }

    // Réinitialiser le champ de recherche
  document.querySelector('#search-message').value = '';
  }
)
