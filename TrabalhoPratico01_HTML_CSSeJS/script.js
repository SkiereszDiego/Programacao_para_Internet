function maiuscula(){
    min = document.getElementById("Name");
    min.value = min.value.toUpperCase();
    
}

function verificarSenhas() {
    var senha = formuser.senha1.value;
    var rep_senha = formuser.senha2.value;



    if (senha == "" || senha.length <= 4){
        alert('Preencha o campo senha com no mínimo 5 caracteres')
        formuser.senha1.focus();
        return false;
    }

    else if (rep_senha == "" || senha.length <= 4){
        alert('Preencha o campo senha com no mínimo 5 caracteres')
        formuser.senha2.focus()
        return false;
    }

    else if (senha != rep_senha) {
        alert('As senhas são diferentes')
        formuser.senha1.focus()
        return false;
    }
}

function verificarTexto(){
    if (form.texto.value == ""){
        alert ("Não há texto escrito") }
}

function Enviar() {

    var nome = document.getElementById("login");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}