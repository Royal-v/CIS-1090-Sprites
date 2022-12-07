

let accrelation = 5;


//You might have some game state so you can keep track of
//what is happening:
let score;  //The players score
let alive;  //is the 

//You might have some constants that you use
const speed = 300;  //In pixels per second
function angledistence(){
    return Math.round(accrelation*(Math.sin(45)/Math.sin(90)));
}
console.log(angledistence())
function movement(up,down,left,right,sprites){
    if(up){
        if(left){
            sprites[0].x = sprites[0].x-angledistence();
            sprites[0].y =  sprites[0].y+angledistence();
        }
        else if(right){
            sprites[0].x = sprites[0].x+angledistence();
            sprites[0].y = sprites[0].y+angledistence();        }
        else{
            sprites[0].y =  sprites[0].y+accrelation
        }
         
    }
    else if(down){
        if(left){
            sprites[0].x = sprites[0].x-angledistence();
            sprites[0].y =  sprites[0].y-angledistence();
        }
        else if(right){
            sprites[0].x = sprites[0].x+angledistence();
            sprites[0].y =  sprites[0].y-angledistence();
        }
        else{
            sprites[0].y =  sprites[0].y-accrelation
        }
    }
    else if(left){
        sprites[0].x= sprites[0].x - accrelation;
    }
    else if(right){
        sprites[0].x = sprites[0].x+accrelation;
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
        let mousex = event.clientX;
        let mousey = event.clientY;
        console.log([mousex,mousey])
    })
    document.addEventListener("onclick",(event)=>{
        let mousedclicked = event.onclick; 
    }
    
    )
    //Sprite "Images" are just characters,
    //But you can use emojis!
    // https://emojis.wiki/


    sprites[0].image = "🛸" ;
    sprites[0].x =  200;
    sprites[0].y = 200;

    sprites[1].image = "🛰️";
    sprites[1].x = 0;
    sprites[1].y = 200;

    sprites[2].image = "📦";
    sprites[2].x = 200;
    sprites[2].y = 150;

    sprites[3].image = "🔵"
    sprites[3].x = 50;
    sprites[3].x = 50;
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
if(mousedclicked){
    alert("it workerd")
}

   
   
   
    //Keep references to the sprites in some variables with
    //better names:
 //Easier to remember
    const spaceship = sprites[0];
    //spaceshipoject.movement(up,down,left,right);
    //Move the fire engine
   movement(up,down, left, right, sprites);
    
   // if (up) {
        //Speed is in pixels per second, and
        //dt is the number of seconds that have
        //passed since the last frame.
        //
        //Multiply them together so that the
        //truck moves at the same speed if the
        //computer is fast or slow
 /*       truck.y += speed * dt;
    } 
    if (down) {
        truck.y -= speed * dt;
    }
    if (right) {
        truck.x += speed * dt;
        //You can flipH a spright so it is facing
        //the other direction
        truck.flipH = true;
    }
    if (left) {
        truck.x -= speed * dt;
        truck.flipH = false;
    }

    //If the truck is close to the house
    if ( distance(truck, house) < 10 ){
        fire.image = ""; //Make the fire go away
    }

    //A very simple repeating animation
    sprites[2].y += Math.sin(t)/10;
*/





    return score;

};



















export default {
    name: "Homeworxxxk",
    instructions: "Write your instructions here",
    icon: "📝", //Choose an emoji icon
    background: {
        //You can put CSS here to change your background
        "background-color": "#555"
    },
    frame,
    setup,
    
};