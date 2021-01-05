function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var text = ["SALUT", "BONJOUR", "HEY", "COUCOU"]
var random = getRandomInt(0, text.length - 1)
window.onload = function () {
    document.getElementById("new_temps_cycle").setAttribute("value", text[random]);
}

function text_user() {
    var string_user = document.getElementById("new_temps_cycle").value
    alert(string_user.length)
    if (string_user.length <= 3) {
        document.getElementById("erreur").innerHTML = "Tapez autre chose"
    }
    else {
        //Envoie de la requete
        spinner.style.display = "block";

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var rep_json = JSON.parse(this.response);
                spinner.style.display = "none";
                //console.log(rep_json);
            }
        };

        xhttp.open("GET", "request_user/"+string_user, true);
        xhttp.send();
    }

}