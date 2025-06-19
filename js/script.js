const tela_nome = document.getElementById("tela_nome");
const input_nome = document.getElementById("name");
const btn_iniciar = document.getElementById("btn_entrar");
const container = document.getElementById("container");
const mensagem_nome = document.getElementById("mensagem_nome");
let nome_usuario = "";

// Variáveis lista de compras
const add_item = document.getElementById("input_item");
const lista_compras = document.getElementById("lista_compras");
const btn_add_item = document.getElementById("btn_adicionar_item");
const contador = document.getElementById("contador");

let itens = [];

btn_iniciar.onclick = () => {
  nome_usuario = input_nome.value.trim();
  if (nome_usuario.length < 3) {
    alert("Digite um nome Válido");
    input_nome.focus();
    return;
  }

  tela_nome.style.display = "none";
  container.classList.remove("hidden");
  mensagem_nome.textContent = `Bem vindo ${nome_usuario}! Monte sua lista de Compras`;
};

btn_add_item.onclick = () => {
  const item = add_item.value.trim();
  if (item.length < 3) {
    alert("Digite um nome de produto Válido");
    add_item.focus();
    return;
  }

  itens.push({
    nome: item,
    comprado: false,
  });

  add_item.value = "";
  render_lista();
};

function render_lista() {
  lista_compras.innerHTML = "";
  itens.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.nome;
    if (item.comprado) {
      li.style.textDecoration = "line-through";
    }
    lista_compras.appendChild(li);
  });

  contador.textContent = `Total de itens: ${itens.length}`;
}
