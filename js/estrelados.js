function capturaEstrelados(data) {
    btnVoltar()
    data.map((data) => {
        contador = 2
        $.each(data, (index, value) => {
            if (index == 'owner')  value = value.login
            if (index == 'license') {
                value = value.name
            }
            exibeEstrelado(index, value, )
        });
        linha3 = $('<br><hr></hr><br>')
        linha.append(linha3)
    })
}

function exibeEstrelado(index, value) {
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