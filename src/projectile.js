
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
    }

    moveDown() {
        this.y += 5;
    }

    getCharCount() {
        return this.word.charCount;
    }

    render(context) {
        context.fillStyle = '#bec8d1';
        context.fillText(this.word.text, this.x, this.y);
    }
}   