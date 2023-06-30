import { Entity } from "./entity";
import { Vector2 } from "./la";
import { Misfit } from "./misfit";
import { Sprite } from "./sprite";

export class Player extends Entity{
    sprite: Sprite;
    velocity: Vector2;
    speed = 600;
    jumpPower = 25;
    gravity = 1;
    constructor(sprite: Sprite){
        super();
        this.sprite = sprite;
        this.velocity = new Vector2();
    }
    update(dt: number): void {
        this.velocity.x = 0;
        if(Misfit.getKeyDown('a')) {
            this.velocity.x-=1;
            this.sprite.hFlip = true;
        }
        if(Misfit.getKeyDown('d')) {
            this.velocity.x+=1;
            this.sprite.hFlip = false;
        }
        this.velocity.x *= this.speed * dt;
        const onGround = this.position.y >= Misfit.height - this.sprite.height;
        if(onGround){
            this.velocity.y = 0;
            this.position.y = Misfit.height - this.sprite.height;
            if(Misfit.getKeyPressed(' ')) this.velocity.y = -this.jumpPower;
        }
        else{
            this.velocity.y += this.gravity;
        }
        this.position = this.position.add(this.velocity);
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x > Misfit.width - this.sprite.width) this.position.x = Misfit.width - this.sprite.width;
    }
    draw(): void {
        this.sprite.draw(this.position);
    }
}