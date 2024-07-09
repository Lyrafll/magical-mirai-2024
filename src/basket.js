/**
 * Basket Class
 */
export class Basket {
    width = 150
    height = 20

    /**
     * Constructor for Basket
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Move the basket to x position
     * @param {number} x 
     */
    moveX(x) {
        this.x = x;
    }

    /**
     * Returns the left bound of the word, used for collisions
     * @returns {number} position
     */
    getLeftBound() {
        return this.x - this.width / 2;
    }

    /**
     * Returns the right bound of the word, used for collisions
     * @returns {number} position
     */
    getRightBound() {
        return this.x + this.width / 2;
    }

    /**
     * Renders the basket on the canvas
     * @param {context} context 
     */
    render(context) {
        context.fillStyle = '#86cecb';
        context.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
    }
}
