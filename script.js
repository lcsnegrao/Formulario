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
        <label for="nomeDependente-${i}">Nome:</label>
        <input type="text" id="nomeDependente-${i}" name="nomeDependente-${i}" placeholder="Nome Completo" required>
        <br />
        <label for="dataNascimentoDependente-${i}">Data de Nascimento:</label>
        <input type="date" id="dataNascimentoDependente-${i}" name="dataNascimentoDependente-${i}" required>
        <br />
        <label for="parentescoDependente-${i}">Parentesco:</label>
        <select id="parentescoDependente-${i}" name="parentescoDependente-${i}" required>
            <option value="filho-filha">Filho/Filha</option>
            <option value="pai-mae">Pai/Mãe</option>
            <option value="conjuge">Cônjuge</option>
        </select>
        <br />
        <label for="sexoDependente-${i}">Sexo:</label>
        <input type="text" id="sexoDependente-${i}" name="sexoDependente-${i}" placeholder="Masculino/Feminino" required>
        <br />
        `;
        // Adiciona o novo grupo à div dos grupos de campos
        divGruposCampos.appendChild(divGrupo);
    }
    // Mostra a div dos grupos de campos
    divGruposCampos.style.display = "block";
}
