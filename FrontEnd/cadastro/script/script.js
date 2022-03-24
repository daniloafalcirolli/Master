var url_comp = 'http://localhost:3000/componente';
var url_amb = 'http://localhost:3000/ambiente';
var url_turma = 'http://localhost:3000/turma';
var dado1 =  document.getElementById("dado1");
var select = document.getElementById("select");
var dado2 =  document.getElementById("dado2");
var campos = document.querySelector(".campos");
var turma_comp = document.querySelector(".turma_comp");

document.querySelector('#compo').click()
openModal()
function componente() {
    turma_comp.style.display = "none"
    campos.style.display = 'block';
    dado1.style.display = "block"
    select.style.display = "none";
    dado1.placeholder = "Componente"
    dado1.type = "text"
    dado2.placeholder = "Carga Horaria"
    dado1.value = "";
    dado2.value = "";
    load_comp(url_comp);

    document.querySelector(".btn_add").onclick = () => {
        let obj = {
            "materia" : dado1.value,
            "carga_horaria" : dado2.value
        }
        console.log(obj)

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
            load_comp(url_comp);
            dado1.value = "";
            dado2.value = "";
        }).catch(err => {
            console.log(err);
        })
    }
}

function load_comp(conf) {
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
        console.log(data)
        data.forEach((e) => {
            let model = document.querySelector(".user").cloneNode(true);
            model.querySelector('.info1').innerHTML = e.materia;
            model.querySelector('.info2').innerHTML = e.carga_horaria;
            model.querySelector(".btn_edit").addEventListener('click', ()=> {
                edit_comp(url, e.id, e.materia, e.carga_horaria);
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

function edit_comp(url, id, materia, carga_horaria) {
    dado1.value = materia
    dado2.value = carga_horaria.split('.')[0];
    document.querySelector(".btn_add").innerHTML = "Alterar";
    document.querySelector(".btn_add").onclick = () => {

        let obj = {
            "materia" : dado1.value,
            "carga_horaria" : dado2.value
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

function ambiente() {
    turma_comp.style.display = "none"
    campos.style.display = 'block';
    select.style.display = "block"
    dado1.style.display = "none";
    dado2.placeholder = "Capacidade";
    dado2.value = "";
    load_amb(url_amb);

    document.querySelector(".btn_add").onclick = () => {
        let obj = {
            "id_tipo" : select.value,
            "capacidade" : dado2.value
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
            load_amb(url_amb);
            select.value = "0";
            select.style.color = "red";
            select.style.fontWeight = "700";
            dado2.value = "";
        }).catch(err => {
            console.log(err);
        })
    }
}

function load_amb(conf) {
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
            let model = document.querySelector(".user").cloneNode(true);
            model.querySelector('.info1').innerHTML = e.tipoAmbiente.tipo ;
            model.querySelector('.info2').innerHTML = e.capacidade;
            model.querySelector(".btn_edit").addEventListener('click', ()=> {
                edit_amb(url, e.id, e.capacidade, e.tipoAmbiente.id)
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

function edit_amb(url, id, capacidade, tipoAmbiente) {
    select.value = tipoAmbiente;
    dado2.value = capacidade
    document.querySelector(".btn_add").innerHTML = "Alterar";
    document.querySelector(".btn_add").onclick = () => {

        let obj = {
            "id_tipo" : select.value,
            "capacidade" : dado2.value
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
            select.value = 0
            document.querySelector(".btn_add").innerHTML = "Adicionar"
            ambiente();
        }).catch(err => {
            console.log(err);
        })  
    }
    
}

function turma() {
    turma_comp.style.display = "none"
    campos.style.display = 'block';
    dado1.style.display = "block";
    select.style.display = "none";
    dado1.placeholder = "Curso";
    dado2.placeholder = "Quantidade de Alunos";

    load_turma(url_turma);

    document.querySelector(".btn_add").onclick = () => {
        let obj = {
            "curso" : dado1.value,
            "alunos" : dado2.value
        }

        fetch(url_turma, {
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
            load_turma(url_turma);
            dado1.value = "";
            dado2.value = "";
        }).catch(err => {
            console.log(err);
        })
    }
}

function load_turma(conf) {
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
            let model = document.querySelector(".user").cloneNode(true);
            model.querySelector('.info1').innerHTML = e.curso;
            model.querySelector('.info2').innerHTML = e.alunos;
            model.querySelector(".btn_edit").addEventListener('click', ()=> {
                edit_turma(url, e.id, e.curso, e.alunos)
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

function edit_turma(url, id, curso, alunos) {
    dado1.value = curso
    dado2.value = alunos;
    document.querySelector(".btn_add").innerHTML = "Alterar";
    document.querySelector(".btn_add").onclick = () => {

        let obj = {
            "curso" : dado1.value,
            "alunos" : dado2.value
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
            turma();
        }).catch(err => {
            console.log(err);
        })  
    }
}

function turma_componente() {
    document.getElementById("select_turma_comp").querySelectorAll("option").forEach(e=>{
        if(e.value!=0){e.remove()}
    })

    turma_comp.style.display = "flex"
    campos.style.display = 'none';
    fetch(url_turma)
    .then(response => response.json())
    .then(resp => {
        resp.forEach(e=>{
            let tur = document.createElement("option");
            tur.value = e.id;
            tur.innerHTML = e.curso
            document.getElementById("select_turma_comp").appendChild(tur);
        })
    });
}

function exclude(url, id) {
    fetch(url + '/' +id, {
        method: "DELETE"
    }).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        console.log(data);
        if(url == url_comp){
            load_comp(url);
        }else if(url == url_amb){
            load_amb(url);
        }else{
            load_turma(url);
        }
        
    }).catch(err => {
        console.log(err);
    })
}

function openModal() {
    document.querySelector(".modal").classList.remove("model");

    fetch(url_comp).then(res => {
        console.log(res); 
        return res.json();
    }).then(data => {
        console.log(data)
        data.forEach((e) => {
            let check = document.querySelector(".check").cloneNode(true);
            check.querySelector('label').innerHTML = e.materia;
            check.classList.remove("model");
            document.querySelector(".checkboxes").appendChild(check);
        })
    }).catch(err => {
        console.log(err);
    })

}

function closeModal() {
    document.querySelector(".modal").classList.add("model");
}

document.querySelector("select").addEventListener("focus", () => {
    document.querySelector("select").style.color = "black";
    document.querySelector("select").style.fontWeight = "500";
})