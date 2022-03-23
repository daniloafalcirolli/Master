var url_comp = 'http://localhost:3000/componente';
var url_amb = 'http://localhost:3000/ambiente';
document.querySelector('#compo').click()

function load_values(conf) {
    document.querySelectorAll('.user').forEach(e=>{
        if(!e.classList.contains('model')){
            e.remove();
        }
    });
    

    let url = conf;
    fetch(url).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        data.forEach((e) => {
            let model = document.querySelector(".model").cloneNode(true);
            model.querySelector('.id').innerHTML = e.carga_horaria || e.tipoAmbiente.tipo ;
            model.querySelector('.nome').innerHTML = e.materia || e.capacidade;
            model.querySelector(".btn_edit").addEventListener('click', ()=> {
                edit(url, e.id, model)
            })
            model.querySelector(".btn_exclude").addEventListener('click', ()=> {
                exclude(url, e.id)
            })
            model.classList.remove("model");
            document.querySelector(".list").appendChild(model);
        })
    }).catch(err => {
        console.log(err);
    })
}

function edit(url, id, model) {

    let chorei1 =  document.getElementById("dado1");
    let chorastes = document.querySelector("#select");
    let chorei2 =  document.getElementById("dado2");
    
    if(model.querySelector(".id").innerHTML == "Oficina"){
        chorastes.value = 3
    }else if(model.querySelector(".id").innerHTML == "Laboratório"){
        chorastes.value = 2
    }else{
        chorastes.value = 1
    }

    if(chorastes.value != 0){
        chorei2.value = (model.querySelector(".nome").innerHTML)
        document.querySelector(".btn_add").innerHTML = "Alterar";
        document.querySelector(".btn_add").onclick = () => {
    
            let obj = {
                "id_tipo" : chorastes.value,
                "capacidade" : chorei2.value
            }
    
            fetch(url + '/' +id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj),
            }).then(res => {
                console.log(res); 
                return res.json();
            }).then(data => {
                console.log(data);
                chorastes.value = 0
                document.querySelector(".btn_add").innerHTML = "Adicionar"
                ambiente();
            }).catch(err => {
                console.log(err);
            })  
        }
    }else{
        chorei1.value = model.querySelector(".nome").innerHTML;
        chorei2.value = model.querySelector(".id").innerHTML.split('.')[0];
        document.querySelector(".btn_add").innerHTML = "Alterar";
        document.querySelector(".btn_add").onclick = () => {
    
            let obj = {
                "materia" : chorei1.value,
                "carga_horaria" : chorei2.value
            }
    
            fetch(url + '/' +id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj),
            }).then(res => {
                console.log(res); 
                return res.json();
            }).then(data => {
                console.log(data);
                document.querySelector(".btn_add").innerHTML = "Adicionar"
                componente();
            }).catch(err => {
                console.log(err);
            })  
        }
    }
}

function exclude(url, id) {

    fetch(url + '/' +id, {
        method: "DELETE"
    }).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        console.log(data);
        load_values(url);
    }).catch(err => {
        console.log(err);
    })
}

function componente() {
    let materia =  document.getElementById("dado1")
    let select = document.getElementById("select");
    let horario =  document.getElementById("dado2")
    materia.style.display = "block"
    select.style.display = "none";
    materia.placeholder = "Componente"
    materia.type = "text"
    horario.placeholder = "Carga Horaria"
    horario.type = "number"
    materia.value = "";
    horario.value = "";
    load_values(url_comp);

    document.getElementById("btn").onclick = () => {
        let obj = {
            "materia" : materia.value,
            "carga_horaria" : horario.value
        }

        fetch(url_comp, {
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
            load_values(url_comp);
            materia.value = "";
            horario.value = "";
        }).catch(err => {
            console.log(err);
        })
    }
}

function ambiente() {
    let fodase =  document.getElementById("dado1");
    let select = document.getElementById("select");
    let capacidade =  document.getElementById("dado2");
    select.style.display = "block"
    fodase.style.display = "none";
    capacidade.placeholder = "Capacidade";
    capacidade.type = "number";
    capacidade.value = "";
    load_values(url_amb);


    document.getElementById("btn").onclick = () => {
        let obj = {
            "id_tipo" : select.value,
            "capacidade" : capacidade.value
        }

        fetch(url_amb, {
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
            load_values(url_amb);
            select.value = "0";
            select.style.color = "red";
            select.style.fontWeight = "700";
            capacidade.value = "";
        }).catch(err => {
            console.log(err);
        })
    }
}

function turma() {
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

document.querySelector("select").addEventListener("focus", () => {
    document.querySelector("select").style.color = "black";
    document.querySelector("select").style.fontWeight = "500";
})