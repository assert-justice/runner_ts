import { Entity } from "./misfit/entity";
import { Vector2 } from "./misfit/la";
import { Misfit } from "./misfit/misfit";
import { Sprite } from "./misfit/sprite";

export class Fire extends Entity{
    sprite: Sprite;
    velocity: Vector2;
    constructor(image: CanvasImageSource){
        super();
        this.sprite = new Sprite(image, 32, 32, 0, 16*2, 16, 16);
        this.velocity = new Vector2(-400, 0);
        this.sprite.hFlip = true;
    }
    update(dt: number): void {
        this.position = this.position.add(this.velocity.mul(dt));
        if(this.position.x < -100){
            this.position.x = Misfit.width;
        }
    }
    draw(): void {
        this.sprite.draw(this.position);
    }
}