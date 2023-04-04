const carre = document.querySelectorAll('.carre');
const message = document.querySelector('.message');
const joueur1NomInput = document.querySelector('#joueur1-nom');
const joueur2NomInput = document.querySelector('#joueur2-nom');

let joueurActu = 'X';
let joueur1Nom = 'Joueur 1';
let joueur2Nom = 'Joueur 2';

player1NameInput.addEventListener('input', () => {
    player1Name = player1NameInput.value;
});

player2NameInput.addEventListener('input', () => {
    player2Name = player2NameInput.value;
});