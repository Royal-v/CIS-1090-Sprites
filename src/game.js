let name = "Badger Dodger";

let dv = 0;
let dead = false;
let score = 0;

function setup(sprites){
    for (let i = 1; i < 4; i++) {
        sprites[i].image = "🦡";
        sprites[i].y = 0;
        sprites[i].x = 300 * i;
    }
}

function game(sprites, t, dt, up, down, left, right, space) {
    if (dead) {
        if (space) {
            score = 0;
            dead = false;
            sprites[0].y = 150;
        }
        return score;
    }

    if (right) {
        sprites[0].x += dt * 500;
        sprites[0].flip = true;
    } else if (left) {
        sprites[0].x -= dt * 500;
        sprites[0].flip = false;
    }

    if (left || right) {
        if (sprites[0].y > 0) {
            sprites[0].image = "🏃‍♂️";
        } else {
            sprites[0].image = (Math.round(t * 10) % 2) ? "🧍‍♂️" : "🏃‍♂️";
        }
    } else {
        sprites[0].image = "🧍‍♂️";
    }

    if ( sprites[0].x < 0 )
        sprites[0].x = 0;
    if ( sprites[0].x > 750 )
        sprites[0].x = 750;

    if (up && sprites[0].y == 0) {
        dv = 10;
    }

    sprites[0].y += dv;

    if (sprites[0].y > 0) {
        dv = dv - .5;
    } else {
        dv = 0;
        sprites[0].y = 0;
    }


    //Move badgers
    for (let i = 1; i < 4; i++) {
        sprites[i].x -= dt * (100 + 30 * i + 10*score);
        if (sprites[i].x < -50) {
            sprites[i].x = 800 + Math.random() * 400;
            score++;
        }
        sprites[i].y = Math.sin(20*t + 10*i);
    }

    if (!dead) {
        for (let i = 1; i < 4; i++) {
            let dMan = Math.abs(sprites[i].x - sprites[0].x);
            if (dMan < 10 && sprites[0].y < 30) {
                dead = true;
                sprites[0].image = "☠️";
            }
        }
    }

    return score;
};

export {name, game, setup};