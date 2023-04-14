let gameRules = {
    rock: {
        rock: 'tie',
        scissors: 'lose',
        paper: 'win',
        spock: 'win',
        lizard: 'lose'
    },
    paper: {
        paper: 'tie',
        rock: 'lose',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        scissors: 'tie',
        paper: 'lose',
        rock: 'win',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        scissors: 'win',
        paper: 'lose',
        rock: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        scissors: 'lose',
        paper: 'win',
        rock: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

//regular rock paper scissors
export function rps(playerShot) {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.trunc(Math.random() * 3);

    // if no arg is provided
    if(playerShot === undefined) {
        return {
            'player': choices[randomNum]
        }
    }

    //get opponent shot
    let compChoice = choices[randomNum];
    playerShot = playerShot.toLowerCase();

    // handles out of range error
    if(!choices.includes(playerShot)) {
        console.error("Argument not in range");
        throw new RangeError;
    }

    //play game
    switch(rpsRules[compChoice[playerShot]]) {
        case 'win': 
            return {'player': playerShot, 'opponent': compChoice, 'result': 'win'};
            break;
        case 'lose':
            return {'player': playerShot, 'opponent': compChoice, 'result': 'lose'};
            break;
        case 'tie':
            return {'player': playerShot, 'opponent': compChoice, 'result': 'tie'}
            break;
    }
}

//rock paper scissors lizard spock
export function rpsls(playerShot) {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNum = Math.trunc(Math.random() * 5);

    // if no arg is provided
    if(playerShot === undefined) {
        return {player: choices[randomNum]}
    }

     //get opponent shot
     let compChoice = choices[randomNum];
     playerShot = playerShot.toLowerCase();
 
     // handles out of range error
     if(!choices.includes(playerShot)) {
         console.error("Argument not in range");
         exit.process(0);
     }

     // play game 
     switch(rpsRules[compChoice[playerShot]]) {
        case 'win': 
            return {'player': playerShot, 'opponent': compChoice, 'result': 'win'};
            break;
        case 'lose':
            return {'player': playerShot, 'opponent': compChoice, 'result': 'lose'};
            break;
        case 'tie':
            return {'player': playerShot, 'opponent': compChoice, 'result': 'tie'}
            break;
    }

}
