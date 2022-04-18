function welcome(){
    return 'Bem vindos ao cinema'
}

var REGISTER = 1;
var DELETE = 2;
var SELECT = 3;
var PRINT = 4;
var EXIT = 5;

function menu(){
    alert(`
    Selecione uma opção

    [1] Cadastrar filme
    [2] Remover filme
    [3] Escolher filme
    [4] Imprimir ingresso
    [5] Sair`)

   return prompt('Digite um numero')
}

console.log( welcome() );

var option = parseInt( menu() ); 

switch (option) {

    case REGISTER:
      console.log('Você selecionou Cadastrar')
      break;
    
    case DELETE:
      console.log('Você selecionou deletar')
      break;

    case SELECT:
      console.log('Você selecionou Escolher')
      break;

    case PRINT:
      console.log('Você selecionou Imprimir')
      break;
    
    case EXIT:
      console.log('Você selecionou sair')
      break;
    
    default:
        alert('Selecione um numero válido');
       
}

