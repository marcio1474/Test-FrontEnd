

function capturaRepositorio(data) {
    btnVoltar()
    contador = 2
    data.map((data) => {
        contador = 2
        $.each(data, (index, value) => {
            if (index == 'owner')  value = value.login
            if (index == 'license') value = value.name
            exibeRepositorio(index, value, )
        });
        divisor = $('<hr></hr>')
        linha.append(divisor)
    })

}

function exibeRepositorio(index, value) {
    if (contador == 2) {
        contador = 0
        linha2 = $('<div></div>').addClass('row');
        linha.append(linha2)
    }
    let coluna = $('<div></div>').addClass('col s6');
    coluna.text(index + ': ' + value)
    linha.append(coluna)
    contador++
}

function btnVoltar() {
    let btnVoltar = $('<a class="waves-effect waves-light btn right" onClick="pesquisa()"><i class="material-icons left">arrow_back</i>Voltar</a>')
    linha.append(btnVoltar)
}