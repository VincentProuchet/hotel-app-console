

// récupération du module `readline`
const { exit } = require('process');
let readline = require('readline');

let service = require('./service');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * affiche le menu à l'utilisateur 
 * dans la console
 */
function start() {
    rl.question(mainMenu()
        , function (saisie) {
            console.log(`Vous avez saisi : ${saisie}`);
            // oui les saisie clavier sont du texte
            switch (saisie) {
                case '1':
                    // rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                    service.choix1();
                    start();
                    // return en remplacement de break resoud les problème de stack
                    return;
                case '2':

                    return;
                case '3':
                    return;
                case '4':
                    return;
                case '99':
                    // libération des resources
                    rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                    exit(0);
                    break;
                // rebouclage du menu
                default:
                    console.log('default');
                    start();
                    return;

            }
            console.log("fin");
        }

    );


}

function mainMenu() {
    return "1.  Lister les clients  \n"
        + "99. Sortir "
        + "\n";

}


/**
 * les exports pour les accés aux fonctions
 */
exports.start = start;