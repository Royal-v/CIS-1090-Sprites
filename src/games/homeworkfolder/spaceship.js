let image;
let x = 0;
let y = 0;
let accrelation = 5;
let turnrate = 15;
let facevelocity;
let xvelocity;
let yvelocity;
let angle = 0;
function setimage(youwantimage){
image = youwantimage
}

function start(startx,starty){
    x = startx;
    y = starty;
}
function turn(turnto){
    angle = turnto == left? angle-turnrate:angle+turnrate;
}
function movemath(movement){
facevelocity = accrelation + facevelocity
    let angleb = angle+90-180
    xvelocity = movement == up?facevelocity*Math.sin(angleb)*(1/Math.sin(90)):-1*facevelocity*Math.sin(angleb)*(1/Math.sin(90));
    yvelocity = movement == up?facevelocity*Math.sin(angle)*(1/Math.sin(90)): -1*facevelocity*Math.sin(angle)*(1/Math.sin(90));
    x = x + xvelocity;
    y = y+ yvelocity;
}
function movement(up,down,left,right){
if(up == true){
movemath(up);
if(left){
    turn(left);
}
if(right){
    turn(right)
}
}
else if(down == true){
    movemath(down);
if(left){
    turn(left);
}
if(right){
    turn(right)
}
}
else{
    xvelocity = 0
    yvelocity = 0 
}
}

let information = [x,y,image]
export default {information,movement,start,setimage}