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

    function calculaImc(peso,altura){
        var imc = 0

        imc = peso / (altura * altura)
        
        return imc.toFixed(2)
    }
}
