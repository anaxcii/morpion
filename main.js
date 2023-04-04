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



function JoueurActu(joueur) {
    if (joueur === 'X') {
        return joueur1Nom;
    } else {
        return joueur2Nom;
    }
}


function gagne() {
    const combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < combos.length; i++) {
        const [a, b, c] = combos[i];
        if (carre[a].textContent === joueurActu &&
            carre[b].textContent === joueurActu &&
            carre[c].textContent === joueurActu) {
            return true;
        }
    }
    return false;
}

function egalite() {
    for (let i = 0; i < carre.length; i++) {
        if (carre[i].textContent === '') {
            return false;
        }
    }
    return true;
}


carre.forEach(carre => {
    carre.addEventListener('click', () => {
        if (carre.textContent !== '') {
            return;
        }
        carre.textContent = joueurActu;
        if (gagne()) {
            message.textContent = `${JoueurActu(joueurActu)} a gagné!`;
            document.querySelector("#btn").classList.remove("disabled");
            document.querySelector("#tableau").classList.add("disabled");
        } else if (egalite()) {
            message.textContent = 'Match nul!';
            document.querySelector("#btn").classList.remove("disabled");
            document.querySelector("#tableau").classList.add("disabled");
        } else {
            joueurActu = joueurActu === 'X' ? 'O' : 'X';
            message.textContent = `${JoueurActu(joueurActu)} à toi de jouer!`;
        }
    });
});


function rejouer(){
    carre.forEach(carre => {
        carre.textContent = '';
    });
    joueurActu = 'X';
    message.textContent = `${JoueurActu(joueurActu)} à toi de jouer!`;
    document.querySelector("#btn").classList.add("disabled");
    document.querySelector("#tableau").classList.remove("disabled");
}