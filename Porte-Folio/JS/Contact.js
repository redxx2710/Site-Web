document.addEventListener('DOMContentLoaded', function() {
    const emailText = document.querySelector('.text-3');

    emailText.addEventListener('click', function() {
        // Créer une zone de texte temporaire pour stocker le texte à copier
        const tempInput = document.createElement('textarea');
        tempInput.value = emailText.innerText;

        // Ajouter la zone de texte temporaire à la DOM
        document.body.appendChild(tempInput);

        // Sélectionner le texte dans la zone de texte temporaire
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

        // Copier le texte dans le presse-papiers
        document.execCommand('copy');

        // Supprimer la zone de texte temporaire de la DOM
        document.body.removeChild(tempInput);

        // Afficher une notification ou effectuer d'autres actions si nécessaire
        alert('Texte copié dans le presse-papiers !');
    });
});