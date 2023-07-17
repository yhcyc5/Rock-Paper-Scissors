function getComputerChoice(){
    random = Math.floor(Math.random() * 3 + 1);
    let output = '';

    switch(random){
        case 1:
            output = 'rock';
            break;
        case 2:
            output = 'paper';
            break;
        case 3:
            output = 'scissors';
            break;
        default:
            output = 'rock';
    }

    return output;
}

function getPlayerChoice(){
    return prompt('rock, paper or scissors?').toLowerCase();
}

function play(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    let result = '';
    let playerEmoji = '';
    let computerEmoji = '';
    
    
    switch (playerSelection){
        case 'rock':
            playerEmoji = '✊';
            if (computerSelection === 'rock'){
                computerEmoji = '✊';
                result = 'draw';
            } else if (computerSelection === 'scissors'){
                computerEmoji = '✌️';
                result = 'player';
            } else if (computerSelection === 'paper'){
                computerEmoji = '🖐️';
                result = 'computer';
            }
            break;
        case 'paper':
            playerEmoji = '🖐️';
            if (computerSelection === 'paper'){
                computerEmoji = '🖐️';
                result = 'draw';
            } else if (computerSelection === 'rock'){
                computerEmoji = '✊';
                result = 'player';
            } else if (computerSelection === 'scissors'){
                computerEmoji = '✌️';
                result = 'computer';
            }
            break;
        case 'scissors':
            playerEmoji = '✌️';
            if (computerSelection === 'scissors'){
                computerEmoji = '✌️';
                result = 'draw';
            } else if (computerSelection === 'paper'){
                computerEmoji = '🖐️';
                result = 'player';
            } else if (computerSelection === 'rock'){
                computerEmoji = '✊';
                result = 'computer';
            }
            break;
        default:
    }
    
    console.log(`player: ${playerEmoji}, computer: ${computerEmoji}`);
    return result;
}


function game(){
    let playRound = 5;
    let playerWinCnt = 0;
    let computerWinCnt = 0;

    for (let i = 1; i <= playRound; i++){
        console.log(`It's round ${i} !!`);
        let result = play();
        switch(result){
            case 'player':
                playerWinCnt++;
                break;
            case 'computer':
                computerWinCnt++;
                break;
            default:
        }
        console.log(`${playerWinCnt}:${computerWinCnt}`);
    }

    if(playerWinCnt > computerWinCnt){
        console.log('You Win!');
    } else if (playerWinCnt < computerWinCnt){
        console.log('You Lose!');
    } else {
        console.log('Draw!');
    }
}

game();