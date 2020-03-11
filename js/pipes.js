// TUYAUX
const tuyaux = 
{
    position : [],
    
    top : 
    {
        sX : 554,
        sY : 0
    },
    bottom:
    {
        sX : 501,
        sY : 0
    },
    
    h : 400,
    w : 53,
    gap : 85,
    maxYPos : -150,
    dx : 2,
    
    draw : function()
    {
        for(var compteur  = 0; compteur < this.position.length; compteur++){
            var p = this.position[compteur];
            
            var topYPip = p.y;
            var bottomYPip = p.y + this.h + this.gap;
            
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPip, this.w, this.h);  
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPip, this.w, this.h);  
        }
    },
    
    update: function()
    {
        if(etat.actuel !== etat.jeu) 
            return;
        
        if(frames%100 == 0){
            this.position.push(
                {
                    x : cvs.width,
                    y : this.maxYPos * ( Math.random() + 1) // Modifier d'environs 0,5 le 1 pour obtenir des niveaux top/bottom
                }
            );
        }
        for(var i = 0; i < this.position.length; i++)
        {
            var p = this.position[i];           
            var bottomPipeYPos = p.y + this.h + this.gap;
            
            // COLLISION DETECTION
            // TOP PIPE
            if(oiseau.x + oiseau.radius > p.x && oiseau.x - oiseau.radius < p.x + this.w && oiseau.y + oiseau.radius > p.y && oiseau.y - oiseau.radius < p.y + this.h){
                etat.actuel = etat.fin;
                HIT.play();
            }
            // BOTTOM PIPE
            if(oiseau.x + oiseau.radius > p.x && oiseau.x - oiseau.radius < p.x + this.w && oiseau.y + oiseau.radius > bottomPipeYPos && oiseau.y - oiseau.radius < bottomPipeYPos + this.h){
                etat.actuel = etat.fin;
                HIT.play();
            }
            
            // Avancer les tuyaux vers la gauche
            p.x = p.x - this.dx;
            
            // Suppression des tuyaux s'ils dépassent le canvas
            if(p.x + this.w <= 0)
            {
                score.value ++;
                SCORE_S.play();
                this.position.shift();
                score.best = Math.max(score.value, score.best);
                localStorage.setItem("best", score.best);
            }
        }
    },
    
    res : function()
    {
        this.position = [];
    }
    
}