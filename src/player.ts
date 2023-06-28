import { Entity } from "./entity";
import { Vector2 } from "./la";
import { Misfit } from "./misfit";
import { Sprite } from "./sprite";

export class Player extends Entity{
    sprite: Sprite;
    velocity: Vector2;
    speed = 300;
    jumpPower = 500;
    gravity = 10;
    constructor(sprite: Sprite){
        super();
        this.sprite = sprite;
        this.velocity = new Vector2();
    }
    update(dt: number): void {
        this.velocity.x = 0;
        if(Misfit.getKeyDown('a')) this.velocity.x-=1;
        if(Misfit.getKeyDown('d')) this.velocity.x-=1;
        this.velocity.x *= this.speed * dt;
    }
    draw(): void {
        this.sprite.draw(this.position);
    }
}