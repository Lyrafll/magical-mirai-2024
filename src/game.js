import { WordProjectile } from "./projectile";
import { Basket } from "./basket";
import { Score } from "./score";

export class Game {

    words = [];
    fallingWords = []
    basket = null;
    score = new Score()


    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;

        this.init()
    }

    init() {

        // canvas cleaning
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = '#373b3e';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.font = "50px jackeyfont";

        this.basket = new Basket(this.canvas.width / 2, this.canvas.height - 40);
        this.isFinished = false;
    }

    /**
     * Step the game
     * Is in charge of updating all the state when game is playing (for example, dropping the words)
     */
    step() {

        // canvas cleaning
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = '#373b3e';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Renders
        this.basket.render(this.context);
        this.score.render(this.context, this.canvas)


        // Update and render all falling words
        this.fallingWords.forEach((word) => {
            if (word.y < this.canvas.height) {
                word.render(this.context)
                word.moveDown();
                this.checkCollision(word);
            } else {
                this.fallingWords = this.fallingWords.filter(function (wp) { return wp != word });
                this.score.resetMultiplier();

            }
            this.score.render(this.context, this.canvas)
        })
    }

    /**
     * Runs the game until there are no more falling words, then declare the game finished
     */
    endGame() {
        if (this.fallingWords.length) {
            this.step();
        } else {
            this.isFinished = true;
        }
    }

    /**
     * Resets the game
     */
    resetGame() {
        this.words = [];
        this.fallingWords = []
        this.basket = null;
        this.score = new Score()

        this.init();
    }

    /**
     * Check collision of WP with the basket 
     * @param {WordProjectile} word 
     */
    checkCollision(word) {
        if (word.y >= this.basket.y) {
            // Make sure the word can get catch by the basket
            if (word.getLeftBound() >= this.basket.getLeftBound() && word.getLeftBound() <= this.basket.getRightBound() ||
                word.getRightBound() >= this.basket.getLeftBound() && word.getRightBound() <= this.basket.getRightBound() ||
                word.getLeftBound() <= this.basket.getLeftBound() && word.getRightBound() >= this.basket.getRightBound()) {
                this.score.increaseMultiplier();
                this.score.increaseScore(word.getCharCount());

                // remove the word from the falling list
                this.fallingWords = this.fallingWords.filter(function (wp) { return wp != word });
            }
        }

    }

    /**
     * Returns the list of words currently in the game
     * @returns {WordProjectile} words
     */
    getWords() {
        return this.words;
    }

    /**
     * Add a WordProjectile to words with a random starting column
     * @param {string} word 
     */
    addWord(word) {
        const wp = new WordProjectile(word, (Math.floor(Math.random() * 7) + 2) * (this.canvas.width / 10), 0)
        this.words.push(wp);
        this.fallingWords.push(wp);
    }

    /**
     * move the basket to the x position
     * @param {number} x 
     */
    moveBasket(x) {
        this.basket.moveX(x);
    }

}