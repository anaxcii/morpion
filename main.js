const carre = document.querySelectorAll('.carre');
const message = document.querySelector('.message');
const joueur1NomInput = document.querySelector('#joueur1-nom');
const joueur2NomInput = document.querySelector('#joueur2-nom');

let joueurActu = 'X';
let joueur1Nom = 'Joueur 1';
let joueur2Nom = 'Joueur 2';

joueur1NomInput.addEventListener('input', () => {
    joueur1Nom = joueur1NomInput.value;
});

joueur2NomInput.addEventListener('input', () => {
    joueur2Nom = joueur2NomInput.value;
});