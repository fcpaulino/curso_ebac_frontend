const form = document.getElementById('form-idades');

const suaIdade = document.getElementById('sua-idade');

const idadePais =document.getElementById('idade-pais')


form.addEventListener('submit', function(e){
    e.preventDefault();
    if (suaIdade.value<idadePais.value) {
        alert("Preenchimento correto")
    } else {
        alert("Idade dos pais tem que ser maior que sua idade")
    }
})

console.log(form);