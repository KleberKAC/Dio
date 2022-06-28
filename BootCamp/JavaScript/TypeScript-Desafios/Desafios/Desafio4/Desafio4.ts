
// minha apiKey '390c1f0924ab87a9cdd20b4499496cc7'
let apiKey: string;
let requestToken: string;
let username: string;
let password: string;
let sessionId: number;
let listId: string = (document.getElementById('idLista')as HTMLInputElement).value;

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') !;
let searchContainer = document.getElementById('search-container') as HTMLDivElement;

loginButton.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

searchButton.addEventListener('click', async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = (document.getElementById('search') as HTMLInputElement).value;
  let listaDeFilmes: any = await procurarFilme(query);
  let ul = document.createElement('ul');
  ul.id = "lista"

  for (const item of listaDeFilmes.results) { 
    let li = document.createElement('li');
    let p = document.createElement('li');
    li.appendChild(document.createTextNode(item.original_title))
    p.appendChild(document.createTextNode(item.id))
    ul.appendChild(li)
    ul.appendChild(p)
  }
  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

function preencherSenha() {
  let senha = document.getElementById('senha') as HTMLInputElement; 
  password = senha.value;
  validateLoginButton();
}

function preencherLogin() {
  let user = document.getElementById('login') as HTMLInputElement;
  username =  user.value;
  validateLoginButton();
}

function preencherApi() {
  let myKey = document.getElementById('api-key') as HTMLInputElement; 
  apiKey = myKey.value;
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}
class HttpClient {
  static async get({url = "", method ="", body =""}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

async function procurarFilme(query:string) {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result
}

async function adicionarFilme(filmeId:number) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })
  console.log(result);
}

async function criarRequestToken () {
  interface Result{sucess:boolean, expires_at: string, request_token: string};
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET" 
  }) as Result;
  requestToken = result.request_token
}

async function logar() {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: JSON.stringify ({
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    })
  })
}

async function criarSessao() {
  interface Result{sucess:boolean, session_id: string}
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  }) as Result;
  sessionId = Number(result.session_id);
}

let itensLista = document.getElementById('suaLista')!;
let botaoLista = document.getElementById('criarLista')!;
let nLista: object
async function criarLista(nomeDaLista: string, descricao: string) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: JSON.stringify ({
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    })
  })
  let retornoLista: any = result
  nLista = retornoLista.list_id 
}

botaoLista.addEventListener('click', async () => {
  let nomeLista = (document.getElementById('nomedaLista')as HTMLInputElement).value
  let descricaoLista = (document.getElementById('descricao')as HTMLInputElement).value
  let criaLista = await criarLista (nomeLista, descricaoLista)
  let div = document.createElement('div')

  const item = document.createElement('div')
  item.innerHTML = `Nome: ${nomeLista}Id: ${nLista}
  Descrição: ${descricaoLista}`
  document.getElementById('suaLista')?.appendChild(item)
  itensLista.appendChild(div)
})
let adicionarFilmes: any
async function adicionarFilmeNaLista(filmeId: number, listaId: string) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body : JSON.stringify ( {
      media_id: filmeId
    })
    
  })
  return adicionarFilmes
  console.log(result);
}

let btnAdicionar = document.getElementById('adicionar')!

btnAdicionar.addEventListener('click', async () => {
  let inputLista: string = (document.getElementById('lista') as HTMLInputElement).value
  let inputFilme: string = (document.getElementById('idFilm')as HTMLInputElement).value
  const adicionarFilme = await adicionarFilmeNaLista(Number(inputFilme), inputLista)
})

let importNameList: object
let importDescricao: object
let importIdLista: object
let importFilme: any
let importNomeFilme: string[]

async function pegarLista() {
  let listaId =(document.getElementById('idLista')as HTMLInputElement).value
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
  let objetoLista: any = result
  console.log(result);

importNameList = objetoLista.name
importDescricao = objetoLista.description
importIdLista = objetoLista.id
importFilme = objetoLista.items
importNomeFilme = [ ]

}

const btnImport = document.getElementById('recebeLista') 
const importar = document.getElementById('importar')!

btnImport?.addEventListener('click', async () =>{
  const receberLista =  await pegarLista()
  let lista = document.getElementById('lista')
  for (let item of importFilme) {
    let l1 = importFilme.lenght -1
    console.log(l1)
    for (let i = 0 ; (i + l1) < importFilme.length; i++) {
      importNomeFilme.push(item.original_title)
    }
  }
  const item = document.createElement('div')
  item.innerHTML = ` nome: ${importNameList}id: ${importIdLista}
    descrição: ${importDescricao} 
    <ul id="lista"></ul>`
    document.getElementById('importar')?.appendChild(item)
    
    for (let k = 0; k <importNomeFilme.length; k++){
      let li = document.createElement('li')
      li.appendChild(document.createTextNode(importNomeFilme[k]))
      lista?.appendChild(li)
      document.getElementById('importar')?.appendChild(li)
}})
