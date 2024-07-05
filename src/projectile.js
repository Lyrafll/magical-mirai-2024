/**
 * WordProjectile class
 */
export class WordProjectile {
    constructor(word, x, y) {
        this.word = word
        this.x = x;
        this.y = y;
    }

    moveDown() {
        this.y += 6;
    }
    render(context) {
        context.fillStyle = '#bec8d1';
        context.fillText(this.word.text, this.x, this.y)
    }
}