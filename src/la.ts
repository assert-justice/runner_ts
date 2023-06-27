/*
vector2
- x
- y
- length()
- normalize()
- copy()
- mul(scalar)
- add(vec2)
*/

export class Vector2{
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0){
        this.x = x; this.y = y;
    }
    length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    copy(){
        return new Vector2(this.x, this.y);
    }
    mul(scalar: number){
        const res = this.copy();
        res.x *= scalar; res.y *= scalar;
        return res;
    }
    add(vec: Vector2){
        const res = this.copy();
        res.x += vec.x; res.y += vec.y;
        return res;
    }
}