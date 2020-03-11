// BACKGROUND
const background = 
{
    sX : 0,
    sY : 0,
    h : 226,
    w : 275,
    x : 0,
    y : cvs.height - 226,
    
    draw : function()
    {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
    
}

// FOREGROUND
const foreground = 
{
    sX: 276,
    sY: 0,
    h: 112,
    w: 224,
    x: 0,
    y: cvs.height - 112,
    
    dx : 2,
    
    draw : function()
    {
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h); 
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },
    
    update: function()
    {
        if(etat.actuel == etat.jeu)
            this.x = (this.x - this.dx)%(this.w/3);
    }
}

// Oiseau etat
const oiseau = 
{
    animation : [
        {sX: 276, sY : 112},
        {sX: 276, sY : 139},
        {sX: 276, sY : 164},
        {sX: 276, sY : 139}
    ],
    x : 50,
    y : 150,
    h : 26,
    w : 34,
    
    radius : 12,
    frame : 0,
    
    gravity : 0.22,
    jump : 4.4,
    vitesse : 0,
    rotation : 0,
    
    draw : function()
    {
        var oiseau = this.animation[this.frame];
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(sprite, oiseau.sX, oiseau.sY, this.w, this.h,- this.w/2, - this.h/2, this.w, this.h);
        ctx.restore();
    },
    
    flap : function()
    {
        this.vitesse = - this.jump;
    },
    
    update: function()
    {
        // ANIMATION OISEAU ECRAN DE DE DEPART
        if(etat.actuel == etat.pret)
            this.period = 10;   
        else    
            this.period = 15;
        // AUGMENTER LA FRAME DE 1 POUR CHAQUE PERIODE
        if (frames%this.period == 0)
            this.frame ++;
        // UNE FOIS LA FRAME JUSQU'A 4, RESTART A 0
        this.frame = this.frame%this.animation.length;
        
        if(etat.actuel == etat.pret)
        {
            this.y = 150; // RESET LA POSITION DE L'OISEAU APRES UN GAME OVER
            this.rotation = 0 * DEGREE; //Position de l'oiseau pour l'écran d'accueil
        }
        else
        {
            this.vitesse += this.gravity;
            this.y += this.vitesse;
            
            if(this.y + this.h/2 >= cvs.height - foreground.h)
            {
                this.y = cvs.height - foreground.h - this.h/2;
                if(etat.actuel == etat.jeu)
                {
                    etat.actuel = etat.fin;
                    DIE.play();
                }
            }
            
            // SI LA VITESSE EST SUPERIEUR AU SAUT, L'OISEAU TOMBE
            if(this.vitesse >= this.jump)
            {
                this.rotation = 90 * DEGREE;
                this.frame = 1;
            }
            else
                this.rotation = -25 * DEGREE;
        }
    },
    vitesseReset : function()
    {
        this.vitesse = 0;
    }
}

// MESSAGE DE DEPART
const pret =
{
    sX : 0,
    sY : 228,
    h : 152,
    w : 173,
    x : cvs.width/2 - 173/2,
    y : 80,
    
    draw: function()
    {
        if(etat.actuel == etat.pret)
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }
}

// MESSAGE DE GAME OVER
const gameOver =
{
    sX : 175,
    sY : 228,
    h : 202,
    w : 225,
    x : cvs.width/2 - 225/2,
    y : 90,
    
    draw: function()
    {
        if(etat.actuel == etat.fin)
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    }  
}