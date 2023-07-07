import { Vector2 } from "./la";
import { Misfit } from "./misfit";

export class TextRenderer{
    text: string;
    style: string;
    position: Vector2;
    color: string;
    measure(){
        Misfit.context.font = this.style;
        return Misfit.context.measureText(this.text);
    }
    get width(){
        return this.measure().width;
    }
    get height(){return this.measure().width;}
    constructor(text: string, style = '16px sans-serif', color = 'white'){
        this.text = text;
        this.style = style;
        this.color = color;
        this.position = new Vector2();
    }
    draw(){
        Misfit.context.font = this.style;
        Misfit.context.fillStyle=this.color;
        Misfit.context.fillText(this.text, this.position.x, this.position.y);
    }
}