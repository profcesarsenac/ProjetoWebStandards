function login(){
    let login = document.getElementsByName("login")[0].value;
    let senha = document.getElementsByName("senha")[0].value;

    if(login == "" || senha == ""){
        alert("Não deixe os campos em branco");
        limparLogin();
    }        
    else if(login == "admin" && senha == "123456"){
        console.log("IR PARA PAGINA PRINCIPAL.HTML");
        window.location.href = "./paginas/principal.html";
    }
    else{
        alert("Login e/ou senha incorretas");
        limparLogin();
    }
    
}

function limparLogin(){
    document.getElementsByName("login")[0].value = "";
    document.getElementsByName("senha")[0].value = "";
    document.getElementsByName("login")[0].focus();
}