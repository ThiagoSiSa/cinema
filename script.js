function welcome(){
    return"Bem vindos ao cinema"
}

function menu(){
    console.log(`
    Selecione uma opção

    [1] Cadastrar filme
    [2] Remover filme
    [3] Escolher filme
    [4] Imprimir ingresso
    [5] Sair`)

    prompt("Digite um numero")
}

console.log( welcome() );
var option = menu(); 



