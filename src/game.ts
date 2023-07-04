import { Fire } from "./fire";
import { Misfit } from "./misfit";
import { Player } from "./player";

export class Game{
    player: Player;
    flames: Fire[];
    itemsImg: CanvasImageSource;
    time = 0;
    constructor(images: CanvasImageSource[]){
        const [playerImg, itemsImg] = images;
        this.itemsImg = itemsImg;
        this.player = new Player(playerImg);
        this.flames = [];
        const fire = new Fire(itemsImg);
        fire.position.x = Misfit.width * 0.8;
        fire.position.y = Misfit.height * 0.8;
        this.flames.push(fire);
    }
    update(dt: number){
        this.player.update(dt);
        this.player.draw();
        for (const flame of this.flames) {
            flame.update(dt);
            flame.draw();
        }
    }
}