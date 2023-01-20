const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener('click', add)

function add() {

 // "today" recebe uma nova data, a data vai ser pelo seu local indicado
 // dentro dos paramentros do "toLocaleDateString()".
 // vai ser transformada em string formato (pt-br) e recortada pelo "slice".
    const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("O Dia, já existe ❌")
        return
    }

 //const "dayExists" verifica dentro do (nlwSetup) se o (today) existe.
 //se for (false) ou seja não existe, ele pula aqui para o "addDay" adicionando o dia.
 //se for (true) ele cai na condição "if (dayExists)", return finaliza o código. 
   alert('Dia adicionado com sucesso ✅')
    nlwSetup.addDay(today)
}

// const data = {

//     basquet: ["01-01", "01-02", "01-06", "01-07"],
//     water: ["01-01", "01-02", "01-06", "01-07"]
// }

// nlwSetup.setData(data)
// nlwSetup.load()