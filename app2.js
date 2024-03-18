function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = "=" + result;
}

function permuter() {
    var num3 = parseFloat(document.getElementById('num3').value);
    document.getElementById('num3').value = document.getElementById('num4').value;
    document.getElementById('num4').value = num3; 
}

function calculate2(){
        var operand1 = parseFloat(document.getElementById('num5').value);
        var operator = document.getElementById('operator').value;
        var operand2 = parseFloat(document.getElementById('num6').value);
        var result;
        
        switch(operator) {
            case '+':
                result = operand1 + operand2;
                result = "=" + result;
                break;
            case '-':
                result = operand1 - operand2;
                result = "=" + result;
                break;
            case '*':
                result = operand1 * operand2;
                result = "=" + result;
                break;
            case '/':
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                    result = "=" + result;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Il faut choisir une opération!";
        }
        
        document.getElementById('result2').innerHTML = result;
    
}





function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
  

function ValeurEntrer(message) {
    let input;
    do {
      input = prompt(message);
    } while (!isNumeric(input));
    return parseFloat(input);
}

const var1 = ValeurEntrer("Entrez la première valeur :");
const var2 = ValeurEntrer("Entrez la deuxième valeur :");
const var3 = ValeurEntrer("Entrez la troisième valeur :");

if (var1 === var2 && var2 === var3) {
    document.getElementById("ex04").innerHTML = "Les trois variables sont identiques.";
  } else if (var1 === var2 || var1 === var3 || var2 === var3) {
    document.getElementById("ex04").innerHTML = "Deux des variables sont de valeurs égales.";
  } else {
    document.getElementById("ex04").innerHTML = "Les trois variables sont différentes.";
  }


const var4 = ValeurEntrer("Prix HT:");
const var5 = ValeurEntrer("Taux de TVA:");

let prix = var4 + var4*var5 ;
document.body.innerHTML += "Le prix TTC est :   "+ prix  +'<br> <br>';


const form = document.querySelector('form.ex06')

form.addEventListener('submit', e => {
    e.preventDefault()
    const email = form.email.value 
    const objet = form.objet.value
    const corps = form.corps.value 
    const html = `
    Sender :   ${email} <br> <br>
    Objet :   ${objet} <br> <br>
    Corps de l'email :  ${corps} <br> <br>
    `
    document.body.innerHTML += html
})

var redirectionLink = document.getElementById("redirectionLink");
redirectionLink.addEventListener("click", e => {
    e.preventDefault();
    alert("Redirection interdite");
  });

var menu = document.getElementById("menu");
menu.addEventListener("click", e => {
    document.getElementById("menu1").style.display = "block";
  });
menu.addEventListener("mouseout", e => {
    document.getElementById("menu1").style.display = "none";
  });