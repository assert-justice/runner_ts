// import { Vector2 } from "./la";
import { Misfit } from "./misfit";
import { Player } from "./player";
// import { Sprite } from "./sprite";

class Game{
    player: Player;
    constructor(images: CanvasImageSource[]){
        const [playerImg, itemsImg] = images;
        this.player = new Player(playerImg);
    }
    update(dt: number){
        this.player.update(dt);
        this.player.draw();
    }
}

async function main(){
    Misfit.init(document.getElementById('root'), 640, 640);
    const playerImage = await Misfit.loadImage('images/player.png');
    const itemImage = await Misfit.loadImage('images/items.png');
    const game = new Game([playerImage, itemImage]);
    function loop(dt: number){
        game.update(dt);
    }
    Misfit.loopFn = loop;
}
main();