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

    render(context) {
        context.fillStyle = '#bec8d1';
        context.fillText("Score : " + this.value, 950, 100);
        context.fillText(this.multiplier + "x", 950, 150);

    }
}