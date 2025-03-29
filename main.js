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
            let td = calendar.getElementsByTagName('td');
            td.style.backgroundColor = color;
        } else {
            alert("Favor informar uma data constante no calendário")
        }
    }

    var elementos = document.querySelectorAll('td');
}