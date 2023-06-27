/*
misfit
- static methods
- init(root, width, height)
- loadImage(filename)
- drawSprite(sprite, x, y)
- (nearest neighbor texture sampling)
- drawText(text, size, color)
- loop(fn)
*/

export class Misfit{
    private static canvas: HTMLCanvasElement;
    private static _context: CanvasRenderingContext2D;
    static get width(){return this.canvas.width;}
    static get height(){return this.canvas.height;}
    static get context(){return this._context;}
    private static keys: Map<string, [boolean, boolean]>;
    private static _loopFn: (dt: number)=>void;
    static nullCheck<T>(val: T | null, errorMessage: string){
        if(val === null) throw errorMessage;
        return val;
    }
    static init(root: HTMLElement | null, width: number, height: number){
        root = this.nullCheck(root, 'Provided root node was null.');
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', `${width}`);
        this.canvas.setAttribute('height', `${height}`);
        this._context = this.nullCheck(this.canvas.getContext('2d'), 'Could not create 2d context.');
        root.appendChild(this.canvas);
        this.keys = new Map();
    }
    private static loop(){}
}