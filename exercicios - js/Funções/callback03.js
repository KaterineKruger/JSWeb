// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
} // A callback é apenas registrada*

/* O evento é o click do mouse e ocorre (chama a callback) quando o usuário clica com o mouse no browser.
Quando o browser é recarregado, a callback é excluída e precisa ser registrada novamente.*/