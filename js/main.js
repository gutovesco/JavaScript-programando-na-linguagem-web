let titulo = document.querySelector(".titulo");
titulo.textContent = "Desaparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");
let btn = document.querySelector(".btn")

for(let i = 0; i < pacientes.length; i++){

let paciente = pacientes[i];

let tdPeso = paciente.querySelector(".info-peso")
let peso = tdPeso.textContent

let tdAltura = paciente.querySelector(".info-altura")
let altura = tdAltura.textContent

let imcPaciente = paciente.querySelector('.info-imc');
let imc = peso / (altura * altura);
imcPaciente.textContent = imc.toFixed(2);

if(peso <= 0 || peso >= 500){
    alert("Peso invalido")
    paciente.classList.add("paciente-invalido")
}

}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('clicado')

let form = document.querySelector("#form-adiciona");
let novoNome = form.nome.value;
let novoPeso = form.peso.value;
let novaAltura = form.altura.value;
let novaGordura = form.gordura.value


let pacientTr = document.createElement("tr")

let nomeTd = document.createElement("td")
let pesoTd = document.createElement("td")
let alturaTd = document.createElement("td")
let gorduraTd = document.createElement("td")
let imcTd = document.createElement("td")

nomeTd.textContent = novonome;
pesoTd.textContent = novoPeso;
alturaTd.textContent = novaAltura;
gorduraTd.textContent = novaGordura;
imcTd.textContent = imc;

pacientTr.appendChild(nomeTd)
pacientTr.appendChild(pesoTd)
pacientTr.appendChild(alturaTd)
pacientTr.appendChild(gorduraTd)
pacientTr.appendChild(imcTd)

})


