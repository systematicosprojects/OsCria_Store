let cont = 1;
document.getElementById("radio" + cont).checked = true;     // Seleciona o primeiro radio

setInterval(function(){     // Função que executa uma ação a cada 4 segundos
    cont++;
    if(cont > 4){
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true; // Seleciona o próximo radio
}, 4000); // 4000 milisegundos = 4 segundos