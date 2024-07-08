/**
 * Basket Class
 */
export class Basket {
    width = 150
    height = 20
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveX(x) {
        this.x = x;
    }

    getLeftBound() {
        return this.x - this.width / 2;
    }

    getRightBound() {
        return this.x + this.width / 2;
    }


    render(context) {
        context.fillStyle = '#86cecb';
        context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
}
