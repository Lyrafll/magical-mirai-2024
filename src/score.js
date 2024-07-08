/**
 * Will handle the score component
 * handle score update and 
 */
export class Score {
    constructor() {
        this.value = 0;
        this.multiplier = 0;
    }

    getScore() {
        return this.value
    }

    increaseMultiplier() {
        this.multiplier++;
    }

    increaseScore(amount) {
        this.value += (amount * this.multiplier);
    }

    resetMultiplier() {
        this.multiplier = 0;
    }

    render(context, canvas) {
        context.fillStyle = '#bec8d1';
        context.textAlign = "right";
        context.fillText("Score : " + this.value, canvas.width - 20, 100);
        context.fillText(this.multiplier + "x", canvas.width - 20, 150);
        context.textAlign = "left";

    }
}