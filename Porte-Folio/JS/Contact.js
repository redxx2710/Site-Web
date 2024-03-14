document.addEventListener('DOMContentLoaded', function() {
    const emailText = document.querySelector('.text-3');

    emailText.addEventListener('click', function() {
   
        const tempInput = document.createElement('textarea');
        tempInput.value = emailText.innerText;

   
        document.body.appendChild(tempInput);

      
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); 

     
        document.execCommand('copy');

        
        document.body.removeChild(tempInput);

        
        alert('Texte copié dans le presse-papiers !');
    });
});