function registro() {
    let nome = document.querySelector("#reg_nome").value;
    let cpf = document.querySelector("#reg_cpf").value;
    let email = document.querySelector("#reg_email").value;
    let cargo = document.querySelector("#reg_cargo").value;
    let tel = document.querySelector("#reg_tel").value;
    let pw1 = document.querySelector("#reg_pw1").value;
    let pw2 = document.querySelector("#reg_pw2").value;
    let pwf = "";
    let url = "http://localhost:3000/usuario";

    console.log(nome, cpf, cargo, email, tel, pw1, pw2)

    if(pw1 == pw2){
        pwf = md5(pw1);
    

    let obj = {
        "nome" : nome,
        "telefone" : tel,
        "cargo" : cargo,
        "email" : email,
        "senha" : pwf,
        "cpf" : cpf,
        "foto" : ""
    }

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj),
    }).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        console.log(data);

    }).catch(err => {
        console.log(err);
    })

    nome.value = "";
    cpf.value = "";
    email.value = "";
    cargo.value = "";
    tel.value = "";
    pw1.value = "";
    pw2.value = "";

    }else{
        alert("As senhas não são iguais!");
    }
}