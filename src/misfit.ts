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
    static loopFn: (dt: number)=>void;
    static lastTimeStamp: number = 0;
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
        document.addEventListener('keydown', e => this.setKey(e.key, true));
        document.addEventListener('keyup', e => this.setKey(e.key, false));
        window.requestAnimationFrame(ts => this.loop(ts));
        this.loopFn = (_) => {};
        this.context.imageSmoothingEnabled = false;
        this.context.fillStyle = 'black';
    }
    static getKeyState(key: string){
        let state = this.keys.get(key);
        if(state === undefined){
            state = [false, false];
            this.keys.set(key, state);
        }
        return state;
    }
    static getKeyDown(key: string){
        return this.getKeyState(key)[0];
    }
    static getKeyPressed(key: string){
        const [current, last] = this.getKeyState(key);
        return current && !last;
    }
    static getKeyReleased(key: string){
        const [current, last] = this.getKeyState(key);
        return !current && last;
    }
    private static setKey(key: string, val: boolean){
        this.getKeyState(key)[0] = val;
    }
    private static loop(timeStamp: number){
        this.context.fillRect(0, 0, this.width, this.height);
        if(this.lastTimeStamp > 0){
            const dt = timeStamp - this.lastTimeStamp;
            this.loopFn(dt / 1000);
        }
        for (const state of this.keys.values()) {
            state[1] = state[0];
        }
        this.lastTimeStamp = timeStamp;
        window.requestAnimationFrame(ts => this.loop(ts));
    }
    static loadImage(path: string): Promise<CanvasImageSource>{
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.addEventListener('load', () => resolve(img));
            img.addEventListener('error', (err) => reject(err));
            img.src = path;
        });
    }
}