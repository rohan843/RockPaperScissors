let score = 0;
const scoreDisp = document.querySelector('#score');
scoreDisp.innerHTML = score;

// const movesInd = { 'rock': 0, 'paper': 1, 'scissor': 2 };
// const moves = ['rock', 'paper', 'scissor'];
// const selectAllExcept = {
//     'rock': ['paper', 'scissor'],
//     'paper': ['rock', 'scissor'],
//     'scissor': ['rock', 'paper']
// };

// function getComputerMove() {
//     return Math.floor((Math.random() * 100)) % 3;
// }

// function userWon(user, comp) {
//     return user == (comp + 1) % 3;
// }

// function displayTriangle(disp) {
//     const triangle = document.querySelector('#triangle');
//     if (!disp) {
//         triangle.style.display = 'none';
//     } else {
//         triangle.style.display = '';
//     }
// }

// function displayIcon(icon, disp) {
//     const elt = document.querySelector(`#${icon}`);
//     if (disp) {
//         elt.style.display = '';
//     } else {
//         elt.style.display = 'none';
//     }
// }

// function gotoWaitForResultStateFor(move, user) {
//     let toHide = selectAllExcept[move];
//     let comp = getComputerMove();
//     const elt = document.querySelector(`#${move}`);
//     displayTriangle(false);
//     for (let elt of toHide) {
//         displayIcon(elt, false);
//     }
//     elt.style.zoom = '1.4';
// }

// for (let move of moves) {
//     const icon = document.querySelector(`#${move}`);
//     icon.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let user = movesInd[move];
//         // let result = `Computer: ${moves[comp]} (${comp}). `;
//         // if(userWon(user, comp))
//         // {
//         //     score++;
//         //     scoreDisp.innerHTML = score;
//         //     result += 'User won!';
//         // }
//         // else
//         // {
//         //     result += 'User didn\'t win';
//         // }
//         // console.log(result);
//         gotoWaitForResultStateFor(move, user);
//     })
// }