


//Create two variable with random values between 2 - 8 [Inclusive function]
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
    name: "Per: ",
    chips: 300,
    manageChips: function(amount) {
        player.chips += amount;
        playerEl.textContent = player.name + '$' + player.chips;
    }
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + '$' + player.chips;

// function manageChips(amount){
//     player.chips += amount;
//     playerEl.textContent = player.name + '$' + player.chips;
// }

function startGame(){
        
    if(!hasBlackJack && sum === 0 && player.chips >0){
        
        isAlive = true;

        let firstCard = randomNumber();
        let secondCard = randomNumber();
    
        cards.push(firstCard);
        cards.push(secondCard);
    
        for(let card in cards){
            sum += cards[card];
        }
        
        renderGame();
    }else if(player.chips === 0){
        messageEl.textContent = "Your chips is out, Add more chips?";
    }
    
}

//Render card number and other values to screen
function renderGame(){

    cardsEl.textContent = "Cards: ";

    for(let card in cards){
        cardsEl.textContent += " "+cards[card];
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21){
        message = "Do you want to draw another card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
        isAlive = false;
        player.manageChips(100);
    } else if (sum > 21){
        message = "You're out of the game!";
        isAlive = false;
        player.manageChips(-100);

    }

    messageEl.textContent = message;

    if(!isAlive || hasBlackJack){
        sum = 0;
        cards = [];
        hasBlackJack = false;
    }
}

//Random cards number
//Incase A equal: 11 [1, 11 possibly]
function randomNumber(){
    // return Math.floor(Math.random() * (Math.floor(8) - Math.ceil(2) + 1) + Math.ceil(2));
    let randNumber = Math.floor(Math.random() * 13) + 1;
    if(randNumber === 1){
        return 11;
    }else if(randNumber > 10){
        return 10;
    }else{
        return randNumber;
    }
}

//Draw new cards
function newCard(){

    if(isAlive){
        let newCardNumber = randomNumber();
        sum += newCardNumber;
        cards.push(newCardNumber);
        renderGame();
    }

}