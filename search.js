function afficher(){
var saisie =document.getElementById("texte1").value;
document.getElementById("texte2").value=saisie ;
}

function loadInsta(string nom) : Observable<any>{
      return this.http.get<any>("https://www.instagram.com/web/search/topsearch/?context=blended&query="+ nom);
  console.log("https://www.instagram.com/web/search/topsearch/?context=blended&query="+ nom);
}

