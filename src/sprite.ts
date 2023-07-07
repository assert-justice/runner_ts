import { Vector2 } from "./la";
import { Misfit } from "./misfit";

export class Sprite{
    image: CanvasImageSource;
    width: number;
    height: number;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    hFlip = false;
    vFlip = false;
    constructor(image: CanvasImageSource,
        width: number,
        height: number,
        sx: number = 0,
        sy: number = 0,
        sw: number | null = null,
        sh: number | null = null){
            this.image = image;
            this.width = width;
            this.height = height;
            this.sx = sx;
            this.sy = sy;
            this.sw = sw ?? width;
            this.sh = sh ?? height;
        }
    draw(pos: Vector2){
        Misfit.context.save();
        const cx = this.hFlip ? -1:1;
        const cy = this.vFlip ? -1:1;
        Misfit.context.scale(cx, cy);
        Misfit.context.drawImage(this.image, 
            this.sx, this.sy, this.sw, this.sh, cx * pos.x, cy * pos.y, this.width * cx, this.height * cy);
        Misfit.context.restore();
    }
}