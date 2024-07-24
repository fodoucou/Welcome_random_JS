console.log("bravo");

//tableau contenant des messages a afficher
const tab_mess = ["Bienvenido Foulek","Para aqui amigo", "Si senor", "Just do it","Winning is not for everybody"];
//chiffre random correspondant à la taille du tableau
let rand_mess = Math.floor(Math.random()*tab_mess.length);
//affichage du message
console.log(tab_mess[rand_mess]);