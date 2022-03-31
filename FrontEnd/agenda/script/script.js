var url_docente = 'http://localhost:3000/usuario/';
var url_curso = 'http://localhost:3000/curso';
var url_ambiente = 'http://localhost:3000/ambiente';
var url_agenda = 'http://localhost:3000/agenda';
var data = "";
var dataIni = "";
var dataFinal = "";
var docente = "";
var arrayDocentes = [];
var capacidade = "";
var alunos = "";
var componentes = [];
var aulas_des = [
    ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],
    [],
    [],
    [],
    [],
    [],
];

load_turma()
load_sala()
load_docentes()

function load_turma() {
    var select1 = document.querySelector('#select1');
    select1.querySelectorAll("option").forEach(e=>{
        if(e.value!=0){e.remove()}
    })
    
    fetch(url_curso)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(e=>{
            let tur = document.createElement("option");
            tur.value = e.id;
            tur.innerHTML = e.curso
            select1.appendChild(tur);
        })
    }).catch(err => {
        console.log(err);
    })
}

function load_sala() {
    var select2 = document.querySelector('#select2');
    select2.querySelectorAll("option").forEach(e=>{
        if(e.value!=0){e.remove()}
    })
    
    fetch(url_ambiente)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(e=>{
            let tur = document.createElement("option");
            tur.value = e.id;
            tur.innerHTML = e.tipoAmbiente.tipo
            select2.appendChild(tur);
        })
    }).catch(err => {
        console.log(err);
    })
}

function load_docentes(){
    fetch(url_docente).then(res => {
        return res.json();
    }).then(data => {
        data.forEach((e) => {
            let check = document.querySelector(".check").cloneNode(true);
            check.querySelector("input").value = e.id;
            check.querySelector('label').innerHTML = e.nome;
            check.classList.remove("model");
            check.addEventListener("change", (e) => {
                if(check.querySelector("input").checked){
                    docente = (check.querySelector("input").value)
                }
            })
            // check.addEventListener("change", (e) => {
            //     if(check.querySelector("input[type=checkbox]").checked){
            //         arrayDocentes.push(check.querySelector("input[type=checkbox]").value)
            //     }else{
            //         arrayDocentes.forEach((e,index)=>{
            //             if(e===check.querySelector("input[type=checkbox]").value){
            //                 arrayDocentes.splice(index, 1)
            //             }
            //         })
            //     }
            // })
            document.querySelector(".checkboxes").appendChild(check);
        })
    }).catch(err => {
        console.log(err);
    })
}

function maskDate(i){
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "10");
    if (v.length == 2 || v.length == 5) i.value += "/";

    function date() {
        let dateUnconverted = (document.querySelector("#dataInicial").value).split("/")
        if(document.querySelector("#dataInicial").value.length == 10){
            for(let a = dateUnconverted.length-1; a >= 0; a--){
                if(a==0){
                    data+=dateUnconverted[a]
                }else{
                    data+=dateUnconverted[a]+","
                }
            }
            dataIni = data.replaceAll(",","-");
        }
        return data;
        
    }
    let finalData = new Date(date())
    console.log(dataIni)
    let finalFinalDate = new Date(finalData.setDate(finalData.getDate()+140))
    
    console.log(finalFinalDate)
    dataFinal = finalFinalDate.getFullYear() + '-' + ((finalFinalDate.getMonth() +1) <= 9 ? "0"+ (finalFinalDate.getMonth() + 1)  : (finalFinalDate.getMonth() + 1)) + '-' + ((""+finalFinalDate.getDate()).length === 2 ? finalFinalDate.getDate() : "0"+ finalFinalDate.getDate());
    document.querySelector("#dataFinal").value = ((""+finalFinalDate.getDate()).length === 2 ? finalFinalDate.getDate() : "0"+ finalFinalDate.getDate()) + '/' + ((finalFinalDate.getMonth() +1) <= 9 ? "0"+ (finalFinalDate.getMonth() + 1)  : (finalFinalDate.getMonth() + 1)) + '/' + finalFinalDate.getFullYear();
    
    data = ""
 }
 
function test(){
    console.log(document.querySelector("#select1").value, document.querySelector("#select2").value, dataIni, dataFinal, docente);
    document.querySelector(".csv").style.display = "block";

    if(document.querySelector("#select1").value == 0 || document.querySelector("#select2").value == 0 || docente == "" || dataIni == "" || dataFinal == ""){
        alert("Preencha todos os campos!");
    }else{
        let obj = {
            "id_ambiente" : document.querySelector("#select2").value,
            "id_turma" : document.querySelector("#select1").value,
            "id_docente" : docente,
            "data_inicial" : dataIni,
            "data_final" : dataFinal
        }

        fetch(url_agenda, {
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
            getDados(data.id);
        }).catch(err => {
            console.log(err);
        })
    
        alert("Dados cadastrados com sucesso!");
    }
    
}

function getDados(id)  {

    fetch(url_agenda + '/' + 1)
    .then(resp => resp.json())
    .then(data => {
        capacidade = data[0].ambiente.capacidade;
        alunos = data[0].turma.alunos;
        data[0].turma.curso.cursoComponentes.forEach(e =>{
            delete e.componente.id;
            componentes.push(e.componente)
        })
        calculos()
    }).catch(err => {
        console.log(err);
    })
}

function calculos(){
    let horaAula = 45;
    let cargaH = 25;
    

    componentes.forEach(e=>{
        console.log(e)
        cargaH = cargaH + parseInt(e.carga_horaria)
        e.aula_semana = 10
        console.log(e)
    })

    console.log(cargaH)

}