// Código para tornar calendário interativo
// utilizando função declarativa
function colorirDia(){
    // bloco de variaveis (escopo de função)
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    // Bloco de validação de informaçoes
    if(!days){
        alert ("Favor, informar um dia existente no calendario");
    } else{
        if((days > 0) && (days < 31)) {
            let td = calendario.getElementsByTagName('td')[parseInt(days)+1];
            td.style.backgroundColor = color;
        } else {
            alert("Favor informar uma data constante no calendário")
        }
    }

    var elementos = document.querySelectorAll('td');

    var contAzul = 0, contVerde = 0, contRosa = 0, contRoxo = 0;

    // Loop para verificar estilo de cada célula e contar quantas tem cores e quais
    for(let i = 0; i < elementos.length; i++){
        // Obtém o estilo aplicado do elemento atual
        var estilo = window.getComputedStyle(elementos[i]);
        // Obtém cor de fundo atual da celula
        var corEstilo = estilo.backgroundColor;

        // Contador de cores utilizadas
        var contadorAzul = document.getElementById('azul');
        var contadorVerde = document.getElementById('verde');
        var contadorRosa = document.getElementById('rosa');
        var contadorRoxo = document.getElementById('roxo');

        // Verifica a cor e incrementa o contador correspondente
        if(corEstilo === 'rgb(173, 216, 230)' || corEstilo === 'LightBlue'){
            contAzul++;
            contadorAzul.textContent = contAzul;
        }
        else if(corEstilo === 'rgb(152, 251, 152)' || corEstilo === 'PaleGreen'){
            contVerde++;
            contadorVerde.textContent = contVerde;
        }
        else if(corEstilo === 'rgb(255, 182, 193)' || corEstilo === 'LightPink'){
            contRosa++;
            contadorRosa.textContent = contRosa;
        }
        else if(corEstilo === 'rgb(106, 90, 205)' || corEstilo === 'SlateBlue'){
            contRoxo++;
            contadorRoxo.textContent = contRoxo;
        }
    }
    
}