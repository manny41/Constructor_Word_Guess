function Letter(strVal){
    this.strVal = strVal;
    this.isGuessed = false;

    this.displayChar = function(){
        if(this.isGuessed){
            return '_';
        }else{
            return this.strVal;
        }
    }
    this.userGuess = function(guess){
        if(guess === this.strVal){
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;