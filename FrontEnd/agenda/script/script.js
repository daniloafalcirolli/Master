var url_docente = 'http://localhost:3000/usuario/';
var url_curso = 'http://localhost:3000/curso';
var url_ambiente = 'http://localhost:3000/ambiente';
var data = "";
var arrayDocentes = [];

load_select()
load_select2()
load_docentes()

function load_select() {
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

function load_select2() {
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

function test(){
    console.log(document.querySelector("#dataInicial").value);
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
        }
        return data;
    }
    
    let finalData = new Date(date())
    console.log(finalData.getMonth() +1)
    console.log()
    let finalFinalDate = new Date(finalData.setDate(finalData.getDate()+140))
    document.querySelector("#dataFinal").value = ((""+finalFinalDate.getDate()).length === 2 ? finalFinalDate.getDate() : "0"+ finalFinalDate.getDate()) + '/' + ((finalFinalDate.getMonth() +1) <= 9 ? "0"+ (finalFinalDate.getMonth() + 1)  : (finalFinalDate.getMonth() + 1)) + '/' + finalFinalDate.getFullYear()
    // console.log(finalData.getDate() + '/' + (finalData.getMonth()+1) + '/' + finalData.getFullYear())
    // console.log(new Date(finalData.setDate(finalData.getDate()+140)))
    data = ""
    
 }