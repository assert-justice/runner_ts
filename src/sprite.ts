import { Vector2 } from "./la";

export class Sprite{
    context: CanvasRenderingContext2D;
    image: CanvasImageSource;
    width: number;
    height: number;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    constructor(context: CanvasRenderingContext2D,
        image: CanvasImageSource,
        width: number,
        height: number,
        sx: number = 0,
        sy: number = 0,
        sw: number | null = null,
        sh: number | null = null){
            this.context = context;
            this.image = image;
            this.width = width;
            this.height = height;
            this.sx = sx;
            this.sy = sy;
            this.sw = sw ?? width;
            this.sh = sh ?? height;
        }
    draw(pos: Vector2){
        this.context.drawImage(this.image, 
            this.sx, this.sy, this.sw, this.sh, pos.x, pos.y, 
            this.width, this.height);
    }
}