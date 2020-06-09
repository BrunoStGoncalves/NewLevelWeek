//para estado de estados ou seja vou entrar em estados, pegar um estado, e jogar na variavel estados. Após isso eu entro no bloco de código. linha 8
//ou posso utilizar then(res => res.json()) já que tenho só um valo na arrow function. linha 6
/*Nesta linha eu acesso o documento, eu faço uma procura (querySelector), 
eu vou procurar pelo seletor ("select[name=uf]") linha 20*/
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => {
            return res.json()
        }).then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}



populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = false

    fetch(url)
        .then((res) => {
            return res.json()
        }).then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        })

}



document
    .querySelector("select[name = uf]")
    .addEventListener("change", getCities)


//Itens de coleta 
//Pegar todos os li´s
const itemsToCollet = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollet) {
    item.addEventListener("click", handleSelectItem)
}

function handleSelectItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript 
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
}