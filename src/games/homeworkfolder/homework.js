




//You might have some game state so you can keep track of
//what is happening:
let score;  //The players score
let alive;  //is the 
let trackingbeamstick = false;
let trackingbeammoving;
let truey
let truex
let trackingbeamtime;
//You might have some constants that you use
const speed = 300;  //In pixels per second
function angledistence(accrelation){
    return Math.floor(accrelation*(Math.sin(45)/Math.sin(90)));
}
console.log(angledistence())
function movement(up,down,left,right,sprites,whatone, speed){
    if(up){
        if(left){
            sprites[whatone].x = sprites[whatone].x-angledistence(speed);
            sprites[whatone].y =  sprites[whatone].y+angledistence(speed);
        }
        else if(right){
            sprites[whatone].x = sprites[whatone].x+angledistence(speed);
            sprites[whatone].y = sprites[whatone].y+angledistence(speed);        }
        else{
            sprites[whatone].y =  sprites[whatone].y+speed
        }
     
    }
    else if(down){
        if(left){
            sprites[whatone].x = sprites[whatone].x-angledistence(speed);
            sprites[whatone].y =  sprites[whatone].y-angledistence(speed);
        }
        else if(right){
            sprites[whatone].x = sprites[whatone].x+angledistence(speed);
            sprites[whatone].y =  sprites[whatone].y-angledistence(speed);
        }
        else{
            sprites[whatone].y =  sprites[whatone].y-speed
        }
    }
    else if(left){
        sprites[whatone].x= sprites[whatone].x - speed;
    }
    else if(right){
        sprites[whatone].x = sprites[whatone].x+speed;
    }
    else{
    
    }
    }
//This is a helper function to compute the distance
//between two sprites
function distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}
let mousex;
let mousey;
let mousedclicked;
//This setup function is called once when the game starts
function setup(sprites) {
    score = 0;      //set score to zero
    alive = true;   //Set player to alive


    document.addEventListener("mousemove",(event)=>{ 
         mousex = event.clientX-60;
         mousey = event.clientY-140;
       
    })
    
    window.addEventListener('click', (event) => {
        if(event.button == 0){
            mousedclicked = true;
        }

    })
    
    //Sprite "Images" are just characters,
    //But you can use emojis!
    // https://emojis.wiki/


    sprites[0].image = "🛸" ;
    sprites[0].x =  200;
    sprites[0].y = 200;

    sprites[1].image = "🛰️";
    sprites[1].x = 0;
    sprites[1].y = 200;

    sprites[3].image = "📦";
    sprites[3].x = 400;
    sprites[3].y = 400;

    sprites[2].image = "🔵"
    sprites[2].x = 50;
    sprites[2].x = 50;
    
    sprites[4].image = "🚀";
    sprites[4].x = 300;
    sprites[4].y = 100;
}
console.log("🛸")
/**
 * This function is called every frame
 * @param sprites   Array of sprite objects
 * @param t         Seconds since start of game
 * @param dt        Seconds since last frame (A very small number)
 * @param up        Is up arrow pressed?
 * @param down      "
 * @param left      "
 * @param right     "
 * @param space     Is spacebar pressed?
 * @param mousemove
 * @returns The current score
 */

 
function frame(sprites, t, dt, up, down, left, right, space) {
    const spaceship = sprites[0];
    const cargo = sprites[3];
    const spacestation = sprites[1];
    const trackingbeam = sprites[2];
    const pirate = sprites[4];
    movement(up,down, left, right, sprites, 0, 300*dt);
    trackingbeamtime = trackingbeamtime+1;
    if(mousedclicked == true){
        trackingbeamtime = 0
        console.log("spaceship position",spaceship.x,spaceship.y) 
        console.log("mouse x and y", mousex, mousey)    
    trackingbeam.x = spaceship.x;
    trackingbeam.y = spaceship.y;
     truex = mousex - spaceship.x;
     truey =spaceship.y - mousey;
     console.log("before limit target",truex,truey)

    console.log("after limit target",truex,truey)
    mousedclicked = false;
    trackingbeammoving = true;
}
if(trackingbeammoving){
    trackingbeam.x = trackingbeam.x + truex*dt;
    trackingbeam.y = trackingbeam.y + truey*dt;
    trackingbeamtime = trackingbeamtime+1;
if (distance(trackingbeam, cargo) <= 20){
    trackingbeamstick = true;
    trackingbeammoving = false; 

} 
}
if(  trackingbeamtime >= 90 && trackingbeamstick == false ){
    trackingbeammoving = false
    truex = 0;
    truey = 0;
    trackingbeam.x = 10000
    trackingbeam.y = 10000
} 
if (trackingbeamstick == true){
    movement(up,down, left, right, sprites, 2, 300*dt)
    movement(up,down, left, right, sprites, 3, 300*dt)


}// test 
   
pirate.x = 350+200*Math.cos(t);
pirate.y = 200+200*Math.sin(t); 
if( distance(spaceship, pirate) <= 30){
    score = score -200;
    spaceship.x = spacestation.x
    spaceship.y= spacestation.y 
} 
    //Keep references to the sprites in some variables with
    //better names:
 //Easier to remember

    //spaceshipoject.movement(up,down,left,right);
    //Move the fire engine
   movement(up,down, left, right, sprites, 0, 200*dt);
    if (distance(cargo,spacestation) <= 10||distance(spaceship,spacestation) <= 10||distance(trackingbeam,spacestation) <= 10 ){
       if(trackingbeamstick){ cargo.x = (50+Math.random()*100+Math.random()*100+Math.random()*100+Math.random()*100+Math.random()*100+Math.random()*100+Math.random()*100+Math.random()*100)%1200
        cargo.y = (50+Math.random()*100+Math.random()*100+Math.random()*100+Math.random()*100)%1200
        score = score + 100;
        trackingbeamstick = false;}
    }




    return score;

};



















export default {
    name: "space game",
    instructions: "Write your instructions here",
    icon: "📝", //Choose an emoji icon
    background: {
        //You can put CSS here to change your background
        "background-color": "#555"
    },
    frame,
    setup,
    
};