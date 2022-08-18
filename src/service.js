function afficherLesClients() {
    console.log(">> Liste des clients ");
    // importation de la librairie request
    // recherche par défaut dans le répertoire node_modules
    var request = require('request');
    // Envoie de la requête http
    // err -> objet erreur en cas de code 4XX ou 5XX
    // res -> objet réponse HTTP complet
    // body -> corps de la réponse
    // L'option { json: true } permet d'obtenir un objet JavaScript dans body (au lieu
    // d'une chaîne de caractères).
    request('https://jsonplaceholder.typicode.com/posts', { json: true }, function (err,
        res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        console.log('Ok', body);
    });
}

function ajouterUnClient() {


}



exports.choix1 = afficherLesClients;