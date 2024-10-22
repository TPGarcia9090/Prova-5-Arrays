let tarefas = [];

function adicionarTarefa() {
    let membro = document.getElementById('membro').value;
    let tarefa = document.getElementById('tarefa').value;
    let dia = document.getElementById('dia').value;
    let hora = document.getElementById('hora').value;

    if (membro === "" || tarefa === "" || dia === "" || hora === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    tarefas.push({ membro, tarefa, dia, hora });

    limparCampos();

    exibirTarefas();
}

function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    exibirTarefas();
}

function atualizarTarefa(indice) {
    let tarefaAtual = tarefas[indice].tarefa;
    let diaAtual = tarefas[indice].dia;
    let horaAtual = tarefas[indice].hora;
    
    let listaTarefas = document.getElementById('lista');
    let tarefaDiv = listaTarefas.children[indice];

    tarefaDiv.innerHTML = `
        <input type="text" id="tarefa-editar-${indice}" value="${tarefaAtual}">
        <input type="date" id="dia-editar-${indice}" value="${diaAtual}">
        <input type="time" id="hora-editar-${indice}" value="${horaAtual}">
        <button onclick="salvarTarefa(${indice})">Salvar</button>
        <button onclick="exibirTarefas()">Cancelar</button>
    `;
}

function salvarTarefa(indice) {
    let novaTarefa = document.getElementById(`tarefa-editar-${indice}`).value;
    let novoDia = document.getElementById(`dia-editar-${indice}`).value;
    let novaHora = document.getElementById(`hora-editar-${indice}`).value;

    if (novaTarefa !== "" && novoDia !== "" && novaHora !== "") {
        tarefas[indice].tarefa = novaTarefa;
        tarefas[indice].dia = novoDia;
        tarefas[indice].hora = novaHora;
    }

    exibirTarefas();
}

function exibirTarefas() {
    let listaTarefas = document.getElementById('lista');
    listaTarefas.innerHTML = "";

    tarefas.forEach((item, indice) => {
        listaTarefas.innerHTML += `
            <div class="tarefas">
                <span><strong>${item.membro}:</strong> ${item.tarefa} - ${item.dia} às ${item.hora}</span>
                <div>
                    <button onclick="atualizarTarefa(${indice})">Editar</button>
                    <button onclick="removerTarefa(${indice})">Remover</button>
                </div>
            </div>
        `;
    });
}

function limparCampos() {
    document.getElementById('membro').value = "";
    document.getElementById('tarefa').value = "";
    document.getElementById('dia').value = "";
    document.getElementById('hora').value = "";
}