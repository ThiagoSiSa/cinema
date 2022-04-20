var REGISTER = 1;
var DELETE = 2;
var SELECT = 3;
var PRINT = 4;
var EXIT = 5;

var movies = [];
var option;

class Movies {
  constructor (movie_name, movie_genre, movie_rating){
  this.movie_name = movie_name;
  this.movie_genre = movie_genre;
  this.movie_rating = movie_rating;
  }
}
console.log( welcome() );
menu();

function prompt(query){
    this.query = query
    var readlineSync = require('readline-sync');
    awnser= readlineSync.question(`${query} \n`);
    return awnser;
    }

function welcome(){
  return 'Bem vindos ao cinema'
}

function menu(){
  console.log(`
  Selecione uma opção

  [1] Cadastrar filme
  [2] Remover filme
  [3] Escolher filme
  [4] Imprimir ingresso
  [5] Sair`)

  option = parseInt(prompt('Digite um numero'));
  while (option != 5){

    switch (option) {

      case REGISTER:
          
        let name = prompt('Digite o nome do filme');
        let genre = prompt('Digite o genero do filme');
        let rating = prompt('Digite a classificação do filme');
        movies.push( new Movies(name, genre, rating));
            
        menu();
      break;      
        
      case DELETE:
        console.log('Você selecionou deletar')
      break;

      case SELECT:

        movies.forEach(function(item, index){
          console.log(index, item.movie_name, item.movie_genre, item.movie_rating)
        });
        menu()         
      break;

      case PRINT:
        console.log('Você selecionou Imprimir')
      break;
        
      case EXIT:
        console.log('Você selecionou sair')
      break;
        
      default:
        alert('Selecione um numero válido');
      break;
            
    }
  }
}



