/*
Welcome!
 */

function greet(language) {
    var Language = language.toLowerCase();
    var str = "";

    var obj = {english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }

    if (Language) {
        if (obj[Language]) {
            str += obj[language];
        } else {
            str += obj['english'];
        }
    } else {
        str += obj['english'];
    }
    return str;
}