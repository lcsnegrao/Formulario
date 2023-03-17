const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length
    // Adiciona um ponto a cada quantidade de caracter
    if (inputLength === 3 || inputLength === 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }
})
// ÁREA DE DEPENDENTES
function mostrarCampos() {
    // Obtém a div dos grupos de campos
    var divGruposCampos = document.getElementById("gruposCampos");
    // Obtém a quantidade selecionada
    var quantidade = document.getElementById("quantidade").value;
    // Limpa a div dos grupos de campos
    divGruposCampos.innerHTML = "";
    // Mostra a quantidade correspondente de grupos de campos
    for (var i = 1; i <= quantidade; i++) {
        // Cria um novo grupo de campos
        var divGrupo = document.createElement("div");
        divGrupo.classList.add("grupo-campos");
        // Adiciona os campos necessários
        divGrupo.innerHTML = `
        <h3>${i}° Dependente</h3>
        <label for="campo1-${i}">Nome:</label>
        <input type="text" id="campo1-${i}" name="campo1-${i}" placeholder="Nome Completo" required>
        <br />
        <label for="campo2-${i}">Data de Nascimento:</label>
        <input type="date" id="campo2-${i}" name="campo2-${i}" required>
        <br />
        <label for="campo3-${i}">Parentesco:</label>
        <input type="text" id="campo3-${i}" name="campo3-${i}" placeholder="Filho" required>
        <br />
        <label for="campo4-${i}">Sexo:</label>
        <input type="text" id="campo4-${i}" name="campo4-${i}" placeholder="Masculino/Feminino" required>
        <br />
        `;
        // Adiciona o novo grupo à div dos grupos de campos
        divGruposCampos.appendChild(divGrupo);
    }
    // Mostra a div dos grupos de campos
    divGruposCampos.style.display = "block";
}
