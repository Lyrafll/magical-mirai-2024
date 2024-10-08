
/**
 * WordProjectile class
 */
export class WordProjectile {
    /**
     * 
     * @param {Word} word 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(word, x, y) {
        this.word = word
        this.x = x;
        this.y = y;
        this.width = word.charCount * 50;
    }

    moveDown() {
        this.y += 5;
    }

    getCharCount() {
        return this.word.charCount;
    }

    getLeftBound() {
        return this.x - this.width / 2;
    }

    getRightBound() {
        return this.x + this.width / 2;
    }

    render(context) {
        context.fillStyle = '#bec8d1';
        context.fillText(this.word.text, this.x - this.width / 2, this.y);
    }
}   