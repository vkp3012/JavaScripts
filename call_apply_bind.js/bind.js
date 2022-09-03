

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    // getPokeName: function() {
    //     var fullname = this.firstname + ' ' + this.lastname;
    //     return fullname;
    // }
};
var pokemon2 = {
    firstname: 'Pika1',
    lastname: 'Chu1 ',
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
pokemonName(); //-> output --- Pika Chu  I choose you!
var aginepokemon = pokemonName.bind(pokemon2) // bind ager ek bar bind ho jata hai to bind nahe hota.
aginepokemon()// bind ager ek bar bind ho jata hai to bind nahe hota. -> output --- Pika Chu  I choose you!