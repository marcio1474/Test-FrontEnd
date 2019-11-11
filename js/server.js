const app = require('./src/config/custom-express')

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})





// const http = require('http');

// const servidor = http.createServer(function (req, resp) {

//     let html = ''
//     if (req.url == '/') {
//         html = `
//             <!DOCTYPE html>
//             <html lang="pt-Br">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
//                 <!-- Compiled and minified CSS -->
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
//                 <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
//                 <link rel="stylesheet" href="./index.css">

//                 <title>Teste Front-End</title>
//             </head>
//             <body>
//                 <div class='container'>
//                     <div class="row">
//                       <div class="input-field col s12">
//                         <input id="busca" type="text" class="busca" />
//                         <label htmlFor="busca">Usuário aqui</label>
//                         <a class="btn-floating btn-medium waves-effect waves-light green" onClick='pesquisa()'><i class="material-icons">search</i></a>
//                       </div>
//                     </div>
//                     <div class="row" id="linha">

//                     </div>
//                   </div>
//             </body>
//             <!-- Compiled and minified JavaScript -->
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//             <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//             <script src="index.js"></script>
//             <script src="repositorio.js"></script>
//             <script src="usuario.js"></script>
//             <script src="estrelados.js"></script>
//             </html>
//         `
//     } else if (req.url == '/')
//     resp.end(html)
// });
// servidor.listen(3000)

// console.log('Servidor rodando na porta 3000');
