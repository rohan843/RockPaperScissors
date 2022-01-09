let score = 0;
const scoreDisp = document.querySelector('#score');
scoreDisp.innerHTML = score;

const movesInd = {'rock': 0, 'paper': 1, 'scissor': 2};
const moves = ['rock', 'paper', 'scissor'];

function getComputerMove() {
    return Math.floor((Math.random() * 100)) % 3;
}

function userWon(user, comp) {
    return user == (comp + 1) % 3;
}

for (let move of moves) {
    const icon = document.querySelector(`#${move}`);
    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        let user = movesInd[move];
        let comp = getComputerMove();
        let result = `Computer: ${moves[comp]} (${comp}). `;
        if(userWon(user, comp))
        {
            score++;
            scoreDisp.innerHTML = score;
            result += 'User won!';
        }
        else
        {
            result += 'User didn\'t win';
        }
        console.log(result);
    })
}