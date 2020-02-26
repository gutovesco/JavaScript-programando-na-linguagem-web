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

var pesoEhValido = validaPeso(peso);
var alturaEhValido = validaAltura(altura);


if(!pesoEhValido || !alturaEhValido){
    alert("Peso ou altura invalido")
    paciente.classList.add("paciente-invalido")
    }   
    
    function validaPeso(peso){
        if(peso >= 0 && peso < 500){
            return true
        }
        else{
            return false
        }
    }
    
    function validaAltura(altura){
        if(altura > 0 && altura < 3){
            return true
        }
        else{
            return false
        }
    }

    function calculaImc(peso,altura){
        var imc = 0

        imc = peso / (altura * altura)
        
        return imc.toFixed(2)
    }


}
