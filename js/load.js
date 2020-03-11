// SELECT CVS
const cvs = document.getElementById("oiseau");
const ctx = cvs.getContext("2d");

// CHARGEMENT DES SPRITES IMAGES
const sprite = new Image();
sprite.src = "images/sprite_flappy_bird.png";

// CHARGEMENT DES FICHIERS AUDIO
const SCORE_S = new Audio();
SCORE_S.src = "sounds/sfx_score.wav";

const JUMP = new Audio();
JUMP.src = "sounds/sfx_up.wav";

const HIT = new Audio();
HIT.src = "sounds/sfx_hit.wav";

const START_SOUND = new Audio();
START_SOUND.src = "sounds/sfx_startingsound.wav";

const DIE = new Audio();
DIE.src = "sounds/sfx_die.wav";

// ETAT DU JEU
const etat = 
{
    actuel : 0,
    pret : 0,
    jeu : 1,
    fin : 2
}

var frames = 0;
const DEGREE = Math.PI/180;

const startButton = 
{
    x : 120,
    y : 263,
    w : 83,
    h : 29
}