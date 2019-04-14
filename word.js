const Letter = require('./letter.js');

function Word(word){
    this.wordMaker = function(word){
        this.storedVal = [];
        this.compare = '';
        for(var i = 0; i < word.length; i++){
           var currentChar = word[i];
           var currentLetter = new Letter(currentChar);
           storedVal.push(currentLetter); 
        }
        return storedVal;
    }

    this.word = this.wordMaker(word);

    this.displayWord = function(){
        var showstr = '';
        for(var i = 0; i < this.word.length; i++){
            var currentLetter = this.word[i];
            showstr += currentLetter.displayChar();
        }
        console.log(showstr);
    }
    this.checkChar = function(val){
        for(var i = 0; i < this.word.length; i++){
            var currentLetter = this.word[i];
            console.log(currentLetter);
            currentLetter.userGuess(val);
        }
        return this.displayWord;
    }
}

module.exports = Word;