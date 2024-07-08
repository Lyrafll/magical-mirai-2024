import { Player } from "textalive-app-api";
import { Game } from "./game";

// 単語が発声されていたら #text に表示する

const player = new Player({ app: { token: "eZ2xkHnnUWrJKQRG" }, mediaElement: document.querySelector("#media") });

const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");

var canvas = document.getElementById("game");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

const game = new Game(ctx, canvas);

player.addListener({
    onAppReady: (app) => {

        playBtn.addEventListener(
            "click",
            () => {
                player.video &&
                    player.requestPlay()
                setInterval(() => {
                    game.step();
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
            //const y = event.clientY - rect.top;

            game.moveBasket(x);
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
            console.log("ready")

        }
    },

    onTimeUpdate: (position) => {
        const punctuationChars = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~・、。・]/;
        // 定期的に呼ばれる各単語の "animate" 関数をセットする
        let w = player.video.firstWord;
        while (w && w.startTime < position) {
            if (!punctuationChars.test(w.text)) {
                console.log(w.text)
                if (!game.getWords().some((word) => word.word === w)) { // maybe store the last startime and compare it to this instead of a full array search ?
                    game.addWord(w);
                }
            }
            w = w.next;
        }
    }

});


