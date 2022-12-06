const cep = document.querySelector("#cep");

const sdata = (resultado) => {
    for (const locais in resultado) {
        if (document.querySelector("#" + locais)) {
            document.querySelector("#" + locais).value = resultado[locais]
        }
    }
}

cep.addEventListener("blur", (e) => {
    let pesquisa = cep.value.replace("-", "");

    const opcao = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, opcao)
        .then(response => {
            response.json()
                .then(data => sdata(data))
        })
        .catch(e => console.log('Erro:' + e, mensage))
}
)