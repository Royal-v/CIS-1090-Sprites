let image;
let x = 0;
let y = 0;
let accrelation = 5;
let turnrate = 15;
let facevelocity;
let xvelocity;
let yvelocity;
let angle = 0;
function angledistence(){
    return Math.round(accrelation*(Math.sin(45)/Math.sin(90)));
}
function setimage(youwantimage){
image = youwantimage
}

function start(startx,starty){
    x = startx;
    y = starty;
}
function movement(up,down,left,right){
if(up){
    if(left){
        x = x+angledistence;
        y = y+angledistence
    }
    else if(right){
        x = x-angledistence;
        y = y+angledistence;
    }
    else{
        x = x+accrelation
    }
     
}
else if(down){
    if(left){
        x = x+angledistence;
        y = y-angledistence
    }
    else if(right){
        x = x-angledistence;
        y = y-angledistence;
    }
    else{
        x = y-accrelation
    }
}
else{

}
}





export default {movement,start,setimage, x, y, image}