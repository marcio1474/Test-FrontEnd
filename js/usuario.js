function capturaUser(data) {

    exibeImg(data)
    exibeBtn()
    contador = 2
    $.each(data, (index, value) => {
        //console.log(index + ': ' + value);
        exibeUser(index, value)
    });

}

function exibeUser(index, value) {
    if (contador == 2) {
        contador = 0
        linha2 = $('<div></div>').addClass('row');
        $(linha).append(linha2)
    }
    let coluna = $('<div></div>').addClass('col s6');
    coluna.text(index + ': ' + value)
    linha.append(coluna)
    contador++
}

function exibeBtn() {
    let btnRepos = $('<a></a>').addClass('waves-effect waves-light btn right').attr('onClick', 'repositorio()');
    let i = $('<i>').addClass('material-icons left').text('cloud');
    btnRepos.text('Repositorio');
    btnRepos.append(i);
    //let btnRepos = $('<a class="waves-effect waves-light btn right" onClick="repositorio()"><i class="material-icons left">cloud</i>Repositorio</a>')



    let btnStared = $('<a></a>').addClass('waves-effect waves-light btn right').attr('onClick', 'estrelado()');
    let i2 = $('<i></i>').addClass('material-icons left').text('star_border');
    btnStared.text('Estrelados');
    btnStared.append(i2);


    //let btnStared = $('<a class="waves-effect waves-light btn right" onClick="estrelado()"><i class="material-icons left">star_border</i>Estrelados</a>')
    linha.append(btnRepos)
    linha.append(btnStared)
}

function exibeImg(data) {
    let img = $('<img></img>').attr({ src: data.avatar_url }).addClass('circle responsive-img col s2 left');
    linha.append(img)
}