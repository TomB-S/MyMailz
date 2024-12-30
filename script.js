// Insert your code here
 
// ajouter nouveau message 
const newMessage = `
<div class="row new-row">
          <img class="avatar" src="images/avatar-1.jpg" />
          <div class="text-container">
            <h6>Tom B</h6>
            <p>Text</p>
          </div>
          <span class="delete">✖</span>
        </div>
 `
 document.querySelector('#msg-container').innerHTML += newMessage;

 // Mettre en place le compteur
    // je cible puis compte le nb de messages (od & new)
 const countMessage = document.querySelectorAll('p').length;
 console.log(countMessage)
    // je modifie le compteur 
document.querySelector('#count').textContent = countMessage;

// AJout de la date et heure    
    // je crée une new var 
const date = new Date();
    // j udpdate la date en utilisant ma var  
document.querySelector('#footer').innerHTML += `
<span id="date">${date}</span>
`


 