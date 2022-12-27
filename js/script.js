let textInput = document.querySelector("#input-text");
let outInput = document.querySelector("#output");


function cripto(){

  	let texto = textInput.value;

  let resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descripto(){

    let texto = textInput.value;

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    let textoCop = document.getElementById('input-text').value;
  
navigator.clipboard.writeText(textoCop).then(() => {
      
        alert("Texto copiado!");
    });
  } 

