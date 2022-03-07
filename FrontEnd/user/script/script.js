getInfo()


function getInfo() {
    let id = JSON.parse(localStorage.getItem("user"));
    let url = "http://10.87.207.30:3000/usuario/" + id;

    fetch(url)
    .then(res => {
        return res.json();
    }).then(data =>{
        let avatar = document.querySelector("#avatar");
        let user = document.querySelector(".user");
        let fields = document.querySelector(".fields");

        
        avatar.src = data[0].foto;
        user.querySelector("h3").innerHTML = data[0].nome;
        fields.querySelector("p").innerHTML = data[0].cpf;
        fields.querySelector("#user_email").value = data[0].email
        fields.querySelector("#user_tel").value = data[0].telefone
    }).catch(err =>[
        console.log(err)
    ])
}

function sair() {
    localStorage.removeItem("user");
    window.location.href="../login/index.html";
}