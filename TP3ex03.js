function validerFormulaire(event) {

    event.preventDefault(); 

    var code = document.getElementById("code").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var semestre = document.getElementById("semestre").value;
    var note1 = parseFloat(document.getElementById("note1").value);
    var note2 = parseFloat(document.getElementById("note2").value);
    var note3 = parseFloat(document.getElementById("note3").value);
    var note4 = parseFloat(document.getElementById("note4").value);
    var note5 = parseFloat(document.getElementById("note5").value);
    var note6 = parseFloat(document.getElementById("note6").value);

    if (code === "" || nom === "" || prenom === "" || semestre === "" ||
      isNaN(note1) || isNaN(note2) || isNaN(note3) || isNaN(note4) || isNaN(note5) || isNaN(note6)) {
      alert("Veuillez remplir tous les champs et saisir des notes valides.");
      return;
    }

    var moyenne = (note1 + note2 + note3 + note4 + note5 + note6) / 6;

    var modulesNonValides = 0;
    if (note1 < 12 && note1 >= 8) modulesNonValides++;
    if (note2 < 12 && note2 >= 8) modulesNonValides++;
    if (note3 < 12 && note3 >= 8) modulesNonValides++;
    if (note4 < 12 && note4 >= 8) modulesNonValides++;
    if (note5 < 12 && note5 >= 8) modulesNonValides++;
    if (note6 < 12 && note6 >= 8) modulesNonValides++;

    var noteEliminatoire = 0;
    if (note1 < 8) noteEliminatoire++;
    if (note2 < 8) noteEliminatoire++;
    if (note3 < 8) noteEliminatoire++;
    if (note4 < 8) noteEliminatoire++;
    if (note5 < 8) noteEliminatoire++;
    if (note6 < 8) noteEliminatoire++;

    var decision = (moyenne >= 12 && modulesNonValides < 3 && noteEliminatoire==0) ? "Valide le semestre" : "Echoue le semestre";

    var tableau = document.getElementById("tableau").getElementsByTagName("tbody")[0];
    var newRow = tableau.insertRow(tableau.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    var cell11 = newRow.insertCell(10);
    var cell12 = newRow.insertCell(11);

    cell1.innerHTML = code;
    cell2.innerHTML = nom;
    cell3.innerHTML = prenom;
    cell4.innerHTML = semestre;
    cell5.innerHTML = note1;
    cell6.innerHTML = note2;
    cell7.innerHTML = note3;
    cell8.innerHTML = note4;
    cell9.innerHTML = note5;
    cell10.innerHTML = note6;
    cell11.innerHTML = moyenne;
    cell12.innerHTML = decision;

    document.getElementById("display").style.display = "block";
  }