import { Game } from "./game";
import { Misfit } from "./misfit/misfit";

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