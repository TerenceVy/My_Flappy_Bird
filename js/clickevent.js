cvs.addEventListener("click", function(evt){
    if (etat.actuel == etat.jeu)
    {
        if(oiseau.y - oiseau.radius <= 0) 
            return;
        oiseau.flap();
        JUMP.play();
    }
    if (etat.actuel == etat.pret)
    {
        etat.actuel = etat.jeu;
        START_SOUND.play();
    }
    if (etat.actuel == etat.fin)
    {
        var rect = cvs.getBoundingClientRect();
        var clickX = evt.clientX - rect.left;
        var clickY = evt.clientY - rect.top;
    }
    // CHECK DU BOUTTON START CLICK
    if(clickX <= startButton.x + startButton.w && clickX >= startButton.x && clickY <= startButton.y + startButton.h &&  clickY >= startButton.y )
    {
            oiseau.vitesseReset();
            tuyaux.res();
            score.res();
            etat.actuel = etat.pret;
        }
}
);