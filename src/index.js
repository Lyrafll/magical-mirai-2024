import { Player } from "textalive-app-api";

// 単語が発声されていたら #text に表示する

class Basket {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveX(x) {
        this.x = x;
    }

    render(context) {
        context.fillStyle = '#86cecb';
        context.fillRect(this.x - 50, this.y - 5, 100, 10)
    }
}

class WordProjectile {
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
        ctx.fillText(this.word.text, this.x, this.y)
    }
}

const player = new Player({ app: { token: "eZ2xkHnnUWrJKQRG" } });

const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.font = "50px jackeyfont";
ctx.fillStyle = '#373b3e';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const words = [];
const basket = new Basket(canvas.width / 2, canvas.height - 10);

player.addListener({
    onAppReady: (app) => {

        playBtn.addEventListener(
            "click",
            () => {
                player.video &&
                    player.requestPlay()
                setInterval(() => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#373b3e';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    basket.render(ctx);

                    words.forEach((word) => {
                        if (word.x < canvas.height) {
                            word.render(ctx)
                            word.moveDown();
                        }
                    })
                }, 17);
            }
        );
        pauseBtn.addEventListener(
            "click",
            () =>
                player.video &&
                player.requestPause()
        );

        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            basket.moveX(x);
        });


        if (!app.songUrl) {
            // フューチャーノーツ / shikisai
            player.createFromSongUrl("https://piapro.jp/t/XiaI/20240201203346", {
                video: {
                    // 音楽地図訂正履歴
                    beatId: 4592297,
                    chordId: 2727637,
                    repetitiveSegmentId: 2824328,
                    // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FXiaI%2F20240201203346
                    lyricId: 59417,
                    lyricDiffId: 13964
                },
            });
            player.volume = 5;

        }


    },

    // 動画オブジェクトの準備が整ったとき（楽曲に関する情報を読み込み終わったとき）に呼ばれる

    onVideoReady: (v) => {

    },

    onTimerReady: (t) => {
        // ボタンを有効化する
        // Enable buttons
        if (!player.app.managed) {
            playBtn.disabled = false;
        }
    },

    onTimeUpdate: (position) => {

        // 定期的に呼ばれる各単語の "animate" 関数をセットする
        let w = player.video.firstWord;
        while (w && w.startTime < position) {
            if (!words.some((word) => word.word === w)) { // maybe store the last startime and compare it to this instead of a full array search ?
                words.push(new WordProjectile(w, (Math.floor(Math.random() * (10 - 1 + 1)) + 1) * 100, 0));
            }
            w = w.next;
        }
    }

});


