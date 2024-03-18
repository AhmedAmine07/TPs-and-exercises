document.getElementById("ex02").addEventListener("submit", function(event) {
    event.preventDefault();

    var dimension = parseInt(document.getElementById("dimension").value);
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    if (isNaN(dimension) || isNaN(min) || isNaN(max)) {
        document.getElementById("result").innerHTML = "<p>Erreur: Veuillez saisir des nombres entiers valides.</p>";
        return;
    }

    if (dimension < 1 || min > max) {
        document.getElementById("result").innerHTML = "<p>Erreur: Veuillez vérifier que la borne inférieure est inférieure à la borne supérieure.</p>";
        return;
    }

    var counter = 0;
    var tableHtml = "<table><tr>";
    for (var i = 0; i < dimension; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        tableHtml += "<td>" + randomNumber + "</td>";
        counter++;
        if (counter === 10) {
            tableHtml += "</tr><tr>";
            counter = 0;
        }
    }
    tableHtml += "</tr></table>";

    document.getElementById("result").innerHTML = tableHtml;
});