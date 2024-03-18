function validerFormulaire(event) {
    event.preventDefault();

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var mdp = document.getElementById("mdp").value;
    var mdpc = document.getElementById("mdpc").value;
    var tel = document.getElementById("tel").value;
    var langue = document.getElementById("langue").value;
    var commentaire = document.getElementById("com").value;

    
    if (nom === "" || prenom === "" || email === "" || mdp === "" || mdpc === "" || tel === "" || langue === "" || commentaire === "") {
        alert("Tous les champs sont obligatoires");
        return;
    }

    if (mdp !== mdpc) {
        alert("Les mots de passe ne correspondent pas");
        return;
    }

    document.getElementById("result1").innerHTML = "<h2>Récapitulatif des informations</h2>" +
        "<p><b>Nom :</b> " + nom + "</p>" +
        "<p><b>Prénom :</b> " + prenom + "</p>" +
        "<p><b>Email :</b> " + email + "</p>" +
        "<p><b>Téléphone :</b> " + tel + "</p>" +
        "<p><b>Langue :</b> " + langue + "</p>" +
        "<p><b>Commentaire :</b> " + commentaire + "</p>";

    document.getElementById("formulaire").reset();
}