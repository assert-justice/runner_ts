import { Vector2 } from "./la";
// import { Sprite } from "./sprite";

export class Entity{
    position: Vector2;
    constructor(){
        this.position = new Vector2();
    }
    update(dt: number){}
    draw(){}    
}