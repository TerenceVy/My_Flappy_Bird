const medaille =
{
    sX : 360,
    sY : 112,
    x : 87,
    y : 175,
    h : 45,
    w : 45,

    draw: function()
    {
        if(etat.actuel == etat.fin)
        {
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }  
}
// SCORE
const score= 
{
    best : parseInt(localStorage.getItem("best")) || 0,
    value : 0,
    
    draw : function()
    {
        ctx.strokeStyle = "Black";
        ctx.fillStyle = "White";
        
        if(etat.actuel == etat.jeu)
        {
            ctx.fillText(this.value, cvs.width/2, 50);
            ctx.strokeText(this.value, cvs.width/2, 50);
            ctx.lineWidth = 2,5;
            ctx.font = "35px Oswald";
        }
        else if(etat.actuel == etat.fin)
        {
            // SCORE VALUE
            ctx.fillText(this.value, 225, 186);
            ctx.strokeText(this.value, 225, 186);
            ctx.font = "25px Oswald";
            // BEST SCORE
            ctx.fillText(this.best, 225, 228);
            ctx.strokeText(this.best, 225, 228);

            // MEDAILLE
        }
    },
    
    res : function()
    {
        this.value = 0;
    }
}
