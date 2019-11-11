
var contador = 0
var linha = $('#linha')


function pesquisa() {
    limpaTela()
    let busca = $('#busca').val()
    $.get('https://api.github.com/users/' + busca, capturaUser)

    //console.log('Digitado: ' + busca);
}


function repositorio() {
    limpaTela()
    let busca = $('#busca').val()
    $.get("https://api.github.com/users/" + busca + "/repos", capturaRepositorio);
}

function estrelado() {
    limpaTela()
    let busca = $('#busca').val()
    $.get("https://api.github.com/users/" + busca + "/starred", capturaEstrelados);

}


function limpaTela() {
    linha.text('')
}


let busca = $('#busca')
$(busca).keypress(function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        pesquisa()
    }
})
