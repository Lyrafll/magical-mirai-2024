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
        this.context.font = "50px jackeyfont";
        this.context.fillStyle = '#373b3e';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.basket = new Basket(this.canvas.width / 2, this.canvas.height - 40);
    }

    /**
     * Step the game
     * Is in charge of updating all the state when game is playing (for example, dropping the words)
     */
    step() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = '#373b3e';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.basket.render(this.context);
        this.score.render(this.context, this.canvas)


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

    checkCollision(word) {
        if (word.y >= this.basket.y) {
            if (word.getLeftBound() >= this.basket.getLeftBound() && word.getLeftBound() <= this.basket.getRightBound() ||
                word.getRightBound() >= this.basket.getLeftBound() && word.getRightBound() <= this.basket.getRightBound() ||
                word.getLeftBound() <= this.basket.getLeftBound() && word.getRightBound() >= this.basket.getRightBound()) {
                this.score.increaseMultiplier();
                this.score.increaseScore(word.getCharCount());
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
        const wp = new WordProjectile(word, (Math.floor(Math.random() * (10 - 1 + 1)) + 1) * 100, 0)
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