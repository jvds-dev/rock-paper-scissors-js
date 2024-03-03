const choices = {"👊" : "✌️", 
                 "✋" : "👊", 
                 "✌️" : "✋"}

const display = document.getElementById("display");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

function playerOption(option){
    computerChoice = computerOption(choices);
    if(option == computerChoice){
        display.textContent = "EMPATE";
        player.textContent = option;
        computer.textContent = computerChoice;
        slide(player, 'left');
        slide(computer, 'right');
        fade(display, "#ffe554");
        console.log(`PLAYER:${option} \nCOMPUTER:${computerChoice}\n>>DRAW<<`);
        // console.log(choices[option])
    }
    else if(computerChoice == choices[option]){
        display.textContent = "VENCEU";
        player.textContent = option;
        computer.textContent = computerChoice;
        slide(player, 'left');
        slide(computer, 'right');
        fade(display, "#54ff5c");
        console.log(`PLAYER:${option} \nCOMPUTER:${computerChoice}\n>>PLAYER WINS<<`);
    }
    else{
        display.textContent = "PERDEU";
        player.textContent = option;
        computer.textContent = computerChoice;
        slide(player, 'left');
        slide(computer, 'right');
        fade(display, "#ff5454");
        console.log(`PLAYER:${option} \nCOMPUTER:${computerChoice}\n>>COMPUTER WINS<<`);
    }

}

function slide(object, direction){
    let value = '';
    if(direction == 'left'){
        value = -250;
    }
    else if(direction == 'right'){
        value = 250;
    }
    object.style.transition = 'none';
    object.style.transform = `translateX(${value}px)`;
    object.style.opacity = '0';

    setTimeout(function() {
        object.style.transition = ''; // Isso irá reativar a transição padrão
        // Definir as propriedades finais para iniciar a animação
        object.style.transform = 'translateX(0px)';
        object.style.opacity = '1';
      }, 1); 
}
function fade(object, color){
    object.style.transition = 'none';
    object.style.opacity = '0';

    setTimeout(function() {
        object.style.transition = ''; // Isso irá reativar a transição padrão
        object.style.opacity = '1';
        object.style.color = `${color}`
      }, 1); 

}

function computerOption(options){
    const keys = Object.keys(options);
    const computerChoice = keys[Math.floor(Math.random() * keys.length)];
    return computerChoice;
}
