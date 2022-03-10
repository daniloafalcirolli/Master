load()

var list = document.querySelector(".list");

function load() {
    let url = 'http://10.87.207.30:3000/usuario';

    fetch(url)
    .then(res => {
        return res.json();
    }).then(data =>{
        data.forEach(funcionario => {
            let user = document.querySelector(".user").cloneNode(true);

            user.classList.remove("model");
            user.querySelector(".cpf").innerHTML = funcionario.cpf;
            user.querySelector(".nome").innerHTML = funcionario.nome;
            list.appendChild(user);
        })
    }).catch(err =>[
        console.log(err)
    ])
}

function buscar() {
    let val = document.querySelector("#busca").value.toLowerCase();

    let rows = document.querySelectorAll("tr");
    

    for(let i = 1; i < rows.length; i++){
        console.log(rows[i].innerHTML)
        if (rows[i].innerHTML.toLowerCase().includes(val)){
            rows[i].style.display = "table-row";
        }else{
            rows[i].style.display = "none";
        }
    }
}