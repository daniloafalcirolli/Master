load()

function load() {
    let url = 'http://10.87.207.30:3000/usuario';

    fetch(url)
    .then(res => {
        return res.json();
    }).then(data =>{
        console.log(data)
    }).catch(err =>[
        console.log(err)
    ])
}