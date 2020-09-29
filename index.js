const words = require('./words.json');

var i = words.length;
var x = 0;

function getRandomWord(){
    return words[Math.floor((Math.random() * words.length) + 1) - 1];
}

function findWord(word){
    if(word){
        for(j = 0; j < i; j++){
            if(words[j] === word || words[j] === word.toLowerCase()){
                return words[j];
            }
        }
        throw 'Mot non trouvé';
    } else {
        throw 'Veuillez fournir un mot';
    }
}