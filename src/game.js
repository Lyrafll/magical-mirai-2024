import { WordProjectile } from "./projectile";
import { Basket } from "./basket";



export class Game {

    words = [];
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

        this.words.forEach((word) => {
            if (word.x < this.canvas.height) {
                word.render(this.context)
                word.moveDown();
            }
        })
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
        this.words.push(new WordProjectile(word, (Math.floor(Math.random() * (10 - 1 + 1)) + 1) * 100, 0))
    }

    /**
     * move the basket to the x position
     * @param {number} x 
     */
    moveBasket(x) {
        this.basket.moveX(x);
    }

}