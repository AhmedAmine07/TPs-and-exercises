//exercice 1
let userInput = prompt("Veuillez entrer une chaîne de caractères :");
document.getElementById('input').innerHTML="La chaîne que vous avez saisie est : " + userInput;

//exercice 2
let a=1; let b=6;
let result = a+b ;
alert("Le résultat de la somme est :"+result);

//exercice 3
let budget = 1000; let achats=600;
if (budget >= achats) {
    document.getElementById('result').innerHTML="Vous pouvez payer vos achats. <br> ";
} else {
    document.getElementById('result').innerHTML="Votre budget ne permet pas de payer vos achats.  <br>";
}

//exrecice 4
let prixHT1 = Number(prompt("Veuillez entrer un prix HT pour exrecice 4:"));
let prixTTC = prixHT1 +  prixHT1*0.2;
document.body.innerHTML += `Le prix TTC1 est a: ${prixTTC}  <br> <br>`;

//exercice 5
let prixHT2 = Number(prompt("Veuillez entrer un prix HT pour exrecice 5:"));
let tauxTVA = Number(prompt("Veuillez entrer un taux TVA pour exrecice 5:"));
let prixTTC2 = prixHT2 +  prixHT2*tauxTVA;
document.body.innerHTML += `Le prix TTC2 est a: ${prixTTC2}  <br> <br>`;

//exercice 6 
let prixHT3 = Number(prompt("Veuillez entrer un prix HT pour exrecice 6:"));
let tauxTVA2 = Number(prompt("Veuillez entrer un taux TVA pour exrecice 6:"));
let prixTTC3 = prixHT3 +  prixHT3*tauxTVA2;

document.getElementById("prix").innerHTML = "Le prix TTC3 est a: "+prixTTC3 + "<br>";

if (prixTTC3>100){
    document.getElementById("prix").style.color = 'red';
}
else{
    document.getElementById("prix").style.color = 'green'; 
}

//exercice 7
document.getElementById("cocktail").innerHTML = "Long Island Iced Tea";

//exercice 8, 9
let numRows = Number(prompt("Veuillez entrer le nombre de ligne:"));
let numColumns = Number(prompt("Veuillez entrer le nombre de colonne:"));
for (let i = 0; i < numRows; i++) {
    let row = document.getElementsByTagName('table')[0].insertRow();
    for (let j = 0; j < numColumns; j++) {
        let cell = row.insertCell();
        cell.textContent = "TP js";
    }
}

//exercice 10
let text10 = "";
for (var i = 0; i < 10; i++) {
    text10 += Math.floor(Math.random() * 100) + '<br>';
}
document.getElementById("random-list").innerHTML = text10;


//exercice 11
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

document.body.style.background = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

//exercice 12
for (var i = 0; i < 12; i++) {
    var randomId = Math.floor(Math.random()*100);
    var imageUrl = 'https://picsum.photos/id/' + randomId + '/350/350';
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageUrl);
    document.getElementById('image-container').appendChild(imageElement);
}