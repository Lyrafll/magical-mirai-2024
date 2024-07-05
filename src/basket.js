/**
 * Basket Class
 */
export class Basket {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveX(x) {
        this.x = x;
    }

    render(context) {
        context.fillStyle = '#86cecb';
        context.fillRect(this.x - 50, this.y - 5, 100, 10)
    }
}
