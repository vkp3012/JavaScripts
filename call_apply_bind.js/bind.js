

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    // getPokeName: function() {
    //     var fullname = this.firstname + ' ' + this.lastname;
    //     return fullname;
    // }
};

let getPokeName =  function() {
   console.log(`${this.firstname} ${this.lastname} I choose you!`);
}

var pokemonName = getPokeName.bind(pokemon)
console.log(pokemonName);
pokemonName();