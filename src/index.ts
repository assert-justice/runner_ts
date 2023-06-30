import { Vector2 } from "./la";
import { Misfit } from "./misfit";
import { Player } from "./player";
import { Sprite } from "./sprite";

class Game{
    //
}

async function main(){
    Misfit.init(document.getElementById('root'), 640, 640);
    const playerImage = await Misfit.loadImage('images/player.png');
    const playerSprite = new Sprite(Misfit.context, playerImage, 32, 32, 0, 0, 16, 16);
    const player = new Player(playerSprite);
    // const playerPos = new Vector2();
    function loop(dt: number){
        player.update(dt);
        player.draw();
    }
    Misfit.loopFn = loop;
}
main();