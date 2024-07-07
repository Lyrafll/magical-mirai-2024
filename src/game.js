import { WordProjectile } from "./projectile";
import { Basket } from "./basket";




export class Game {

    words = [];
    fallingWords = []
    basket = null;


    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;

        this.init()
    }

    init() {
        this.context.font = "50px jackeyfont";
        this.context.fillStyle = '#373b3e';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.basket = new Basket(this.canvas.width / 2, this.canvas.height - 10);
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

        this.fallingWords.forEach((word) => {
            if (word.y < this.canvas.height) {
                word.render(this.context)
                word.moveDown();
                this.checkCollision(word);
            } else {
                this.fallingWords = this.fallingWords.filter(function (wp) { return wp != word });
            }
        })
    }

    checkCollision(word) {
        // have a better detection system ! 
        if (word.y >= this.basket.y && word.x <= this.basket.x + 50 && word.x >= this.basket.x - 50) {
            console.log("+1 !")
            console.log(this.fallingWords)

            this.fallingWords = this.fallingWords.filter(function (wp) { return wp != word });

            // remove word from list
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