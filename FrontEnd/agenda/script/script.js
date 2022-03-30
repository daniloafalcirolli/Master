var url_docente = 'http://localhost:3000/usuario/';
var url_curso = 'http://localhost:3000/curso';
var arrayDocentes = [];

load_docentes()
load_select()

function load_select() {
    var select1 = document.querySelector('#select1');
    select1.querySelectorAll("option").forEach(e=>{
        if(e.value!=0){e.remove()}
    })
    
    fetch(url_curso)
    .then(response => response.json())
    .then(resp => {
        resp.forEach(e=>{
            let tur = document.createElement("option");
            tur.value = e.id;
            tur.innerHTML = e.curso
            select1.appendChild(tur);
        })
    });
}

function load_docentes(){
    fetch(url_docente).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        data.forEach((e) => {
            let check = document.querySelector(".check").cloneNode(true);
            check.querySelector("input[type=checkbox]").value = e.id;
            check.querySelector('label').innerHTML = e.nome;
            check.classList.remove("model");
            check.addEventListener("change", (e) => {
                if(check.querySelector("input[type=checkbox]").checked){
                    arrayDocentes.push(check.querySelector("input[type=checkbox]").value)
                }else{
                    arrayDocentes.forEach((e,index)=>{
                        if(e===check.querySelector("input[type=checkbox]").value){
                            arrayDocentes.splice(index, 1)
                        }
                    })
                }
            })
            document.querySelector(".checkboxes").appendChild(check);
        })
    }).catch(err => {
        console.log(err);
    })
}