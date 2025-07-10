const postForm = document.querySelector("#form-content")
const titulo = document.querySelector("#titulo")
const conteudo = document.querySelector("#conteudo")

const renderizadorTitulo = document.querySelector("#renderizador-titulo")
const renderizadorConteudo = document.querySelector("#renderizador-conteudo")

//criadas todas as variáveis de armazenamento de dados HTML//

postForm.addEventListener('submit', event => {
event.preventDefault() // tirar o padrão do formulário de recarregar a página

const data = {
title: titulo.value,
body: conteudo.value,
idUsuario: 1,
}

//inicio da requisição FETCH//

fetch('https://jsonplaceholder.typicode.com/posts', {
method:'post',
body: JSON.stringify(data),
headers: {
'content-type': 'application/json; charset=UTF-8'
}
}).then(response => response.json()).then(post => {

renderizadorTitulo.textContent = post.title
renderizadorConteudo.textContent = post.body

postForm.reset();
}).catch(error => {
console.error('deu erro ao enviar o post')
})
})