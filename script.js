document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo');

    // Lägg till en event listener för klickhändelsen på logotypen
    logo.addEventListener('click', function() {
        // Skapa en popup
        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = 'Välkommen till vår bokhandel!';

        // Lägg till popupen till body
        document.body.appendChild(popup);

        // Ställ in tiden för popupen att försvinna efter 3 sekunder
        setTimeout(function() {
            popup.remove();
        }, 3000);
    });
});
