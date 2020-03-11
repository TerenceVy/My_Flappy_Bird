function draw()
{
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    background.draw();
    oiseau.draw();
    tuyaux.draw();
    foreground.draw();
    pret.draw();
    gameOver.draw();
    score.draw();
    if(score.value >= 10)
        medaille.draw();
}

function update()
{
    foreground.update();
    tuyaux.update();
    oiseau.update();
}

function loop()
{
    update();
    draw();
    frames++; 
    requestAnimationFrame(loop);
}

loop();
