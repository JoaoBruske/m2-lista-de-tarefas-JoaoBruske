const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks) {
  const lista = document.querySelector(".tasks__list");

  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    let item = createTaskItem(task);
    lista.appendChild(item);
  }
}

function createTaskItem(task) {
  const item = document.createElement("li");
  const container = document.createElement("task-info__container");
  const tipo = document.createElement("span");
  const titulo = document.createElement("p");
  const botaoExcluir = document.createElement("button");

  container.classList.add("task-info__container");
  item.classList.add("task__item");
  tipo.classList.add("task-type");

  if (task.type === "Urgente") {
    tipo.classList.add("span-urgent");
  } else if (task.type === "Importante") {
    tipo.classList.add("span-important");
  } else if (task.type === "Normal") {
    tipo.classList.add("span-normal");
  }

  titulo.innerText = task.title;
  botaoExcluir.classList.add("task__button--remove-task");
  botaoExcluir.addEventListener("click", removerTarefa);

  item.appendChild(container);
  container.appendChild(tipo);
  container.appendChild(titulo);
  item.appendChild(botaoExcluir);

  return item;
}

renderElements(tasks);

function adicionarTarefa() {
  const inputTarefa = document.querySelector("#input_title");
  const selTipo = document.querySelector(".form__input--priority");

  let novaTarefa = {
    title: inputTarefa.value,
    type: selTipo.value[0].toUpperCase() + selTipo.value.substring(1),
  };
  tasks.push(novaTarefa);
  renderElements(tasks);
}

function removerTarefa(event) {
  let titulo = event.target.previousElementSibling.children[1].innerText;
  for (let i = 0; i < tasks.length; i++) {
    if (titulo === tasks[i].title) {
      tasks.splice(i, 1);
    }
  }
  renderElements(tasks);
}

const formAdicionar = document.querySelector(".form__container");
formAdicionar.addEventListener("submit", adicionarTarefa);
formAdicionar.addEventListener("submit", function (event) {
  event.preventDefault();
});
