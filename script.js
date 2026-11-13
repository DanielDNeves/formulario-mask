// mascaras
function mascara_cep(){
    let cep = document.getElementById("cep").value

    if (cep[5]!= '-'){
        if (cep [5] != undefined){
            document.getElementById("cep").value = cep.slice(0,5) + "-" + cep[5]
            cep = document.getElementById("cep").value
        }
    }
}

function mascara_cpf(){
    let cpf = document.getElementById("cpf").value

    if (cpf [3] != '.'){
        if (cpf [3] != undefined){
            document.getElementById("cpf").value = cpf.slice(0,3) + "." + cpf[3]
            cpf = document.getElementById("cpf").value
        }
    }

    if (cpf [7] != '.'){
        if (cpf [7] != undefined){
            document.getElementById("cpf").value = cpf.slice(0,7) + "." + cpf[7]
            cpf = document.getElementById("cpf").value
        }
    }

    if (cpf [11] != '-'){
        if (cpf [11] != undefined){
            document.getElementById("cpf").value = cpf.slice(0,11) + "-" + cpf[11]
            cpf = document.getElementById("cpf").value
        }
    }
}

function mascara_cnpj(){
    let cnpj = document.getElementById("cnpj").value

    if (cnpj [2] != '.'){
        if (cnpj [2] != undefined){
            document.getElementById("cnpj").value = cnpj.slice(0,2) + '.' + cnpj[2]
            cnpj = document.getElementById("cnpj").value
        }
    }

    if (cnpj [6] != '.'){
        if (cnpj [6] != undefined){
            document.getElementById("cnpj").value = cnpj.slice(0,6) + '.' + cnpj[6]
            cnpj = document.getElementById("cnpj").value
        }
    }

    if (cnpj [10] != '/'){
        if (cnpj [10] != undefined){
            document.getElementById("cnpj").value = cnpj.slice(0,10) + '/' + cnpj[10]
            cnpj = document.getElementById("cnpj").value
        }
    }

    if (cnpj[15] != '-'){
        if (cnpj[15] != undefined){
            document.getElementById("cnpj").value = cnpj.slice(0,15) + '-' + cnpj[15]
            cnpj = document.getElementById("cnpj").value
        }
    }
}

function mascara_telefone(){
    let tel = document.getElementById("tel").value

    if (tel[0] != '+'){
        if (tel[0] != undefined){
            document.getElementById("tel").value = tel.slice(0,0) + '+' + tel
            tel = document.getElementById("tel").value
        }
    }

    if (tel[3] != '('){
        if (tel[3] != undefined){
            document.getElementById("tel").value = tel.slice(0,3) + '(' + tel.slice(3)
            tel = document.getElementById("tel").value
        }
    }

    if (tel[6] != ')'){
        if (tel[6] != undefined){
            document.getElementById("tel").value = tel.slice(0,6) + ')' + tel.slice(6)
            tel = document.getElementById("tel").value
        }
    }

    if (tel[12] != '-'){
        if (tel[12] != undefined){
            document.getElementById("tel").value = tel.slice(0,12) + '-' + tel.slice(12)
            tel = document.getElementById("tel").value
        }
    }
}
    

    // TROCA DE TEMA ADDEVENTLISTENER


    const btnt = document.getElementById("btn-tema")

    btnt.addEventListener('click', function(){
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains("tema-claro")){
        localStorage.setItem("tema", "claro");
        btnt.innerHTML = "🌙 Tema escuro";
    }
    else {
        localStorage.setItem("tema", "escuro");
        btnt.innerHTML = "☀️ Tema claro";
    }
    });


    //TROCA DE TEMA - 

    let temaSalvo = localStorage.getItem("tema")

    if (temaSalvo == "claro"){
        document.body.classList.add("tema-claro")
    }

    //troca do texto

        if (temaSalvo == "claro"){
            btnt.textContent = "🌙 Tema escuro";
        }

        else {
            btnt.textContent = "☀️ Tema claro"
        }


//SALVAR INFORMACOES DE UM FORMULARIO COM O LOCAL STORAGE


const nome = document.getElementById("nome");
const endereco = document.getElementById("endereco");
const enviar = document.getElementById("enviar")

enviar.addEventListener('click', function(){
    const nomeDigitado = nome.value
    const enderecoDigitado = endereco.value

    localStorage.setItem("nome", nomeDigitado)
    localStorage.setItem("endereco", enderecoDigitado)
})

nome.value = localStorage.getItem("nome")
endereco.value = localStorage.getItem("endereco")