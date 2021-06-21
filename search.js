function afficher(){
    var saisie =document.getElementById("texte1").value;
    document.getElementById("texte2").value=saisie ;
    loadInsta(saisie);
}

function loadInsta(nomStar) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.instagram.com/web/search/topsearch/?context=blended&query='+nomStar);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var reponse = JSON.parse(xhr.responseText);
            console.log(reponse);
        }
    };
    xhr.send();
}
