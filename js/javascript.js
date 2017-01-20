$(function(){
  $("#first_paragraph").hide();
  $("#first_question").click(function(){
  $("#first_paragraph").toggle();
  });
});

$(function(){
  $("#second_paragraph").hide();
  $("#second_question").click(function(){
  $("#second_paragraph").toggle();
  });
});

function verifierCaracteres(event) {
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
	var champ = document.getElementById('mon_input');

	var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;
	}

}
function activate(e){

if( 48 < e.which && e.which< 57 || e.which ==8 || e.which ==0) {


}else{
e.preventDefault();
return false;
}

}
function verifierCaracteres2(event) {
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
	var champ = document.getElementById('mon_input2');

	var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;
	}

}
function changer(){
  document.getElementById('titlepage').innerHTML = "Poker Style !!!";
  document.getElementById('title').innerHTML = "Bluffer pour mieux attaquer";
  document.getElementById('first_question').innerHTML ="Comment appelle t'on une suite de 2 cartes au poker ?";
  document.getElementById('first_paragraph').innerHTML="Ceci était une question facile une suite de deux carte au poker a pour nom \'Une paire\'car oui cela fonctionne comme pour les chausettes"
  document.getElementById('second_question').innerHTML="Quelle est la haute combinaison que l'on peut réaliser au poker ?";
  document.getElementById('second_paragraph').innerHTML="Il s\'agit d'une Quinte Flush Royal (suite ou quinte) du 10 à l\'As,de la même couleur (pique, coeur, carreau, ou trèfle). C\'est la combinaison la plus forte au poker, absolument imbattable. Elle est également évidemment très rare, et beaucoup de joueurs n'en verront sans doute jamais de toute une vie";
  document.getElementById('Nomform').innerHTML="Contact";
  document.getElementById('nom').innerHTML="Votre Nom";
  document.getElementById('prenom').innerHTML="Votre Prenom";
  document.getElementById('email').innerHTML="Votre adress Mail";
  document.getElementById('msg').innerHTML="Votre message";
  document.getElementById('success_message').innerHTML="Merci pour votre message";
  document.getElementById('Valid').innerHTML="Valider";
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("Valid");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
