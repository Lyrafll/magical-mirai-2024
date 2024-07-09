import { Player } from "textalive-app-api";
import { Game } from "./game";

// 単語が発声されていたら #text に表示する

const player = new Player({ app: { token: "eZ2xkHnnUWrJKQRG" }, mediaElement: document.querySelector("#media") });

const overlayStart = document.getElementById('overlay-menu');
const overlayEndgame = document.getElementById('overlay-endgame');

const score = document.getElementById('score');
var playing = false;

const playBtn = document.getElementById("play");
const replayBtn = document.getElementById('replay')

var canvas = document.getElementById("game");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

const game = new Game(ctx, canvas);

function startGame() {

    player.timer.seek(0)
    player.requestPlay()

    let interval = setInterval(() => {
        if (player.isPlaying) {
            game.step();
        } else {
            game.endGame();
            if (game.isFinished) {
                score.innerText = game.score.getScore();
                overlayEndgame.style.display = "block";
                playing = false;
                clearInterval(interval)
            }
        }
    }, 17);
}

player.addListener({
    onAppReady: (app) => {

        // overlayEndgame.style.display = "block";

        overlayStart.style.display = "block";
        playBtn.disabled = true;


        playBtn.addEventListener(
            "click",
            () => {
                if (!playBtn.disabled) {
                    overlayStart.style.display = "none";
                    startGame();
                }
            }
        );

        replayBtn.addEventListener("click", () => {
            game.resetGame();
            overlayEndgame.style.display = "none";
            startGame();
        })

        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;

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

    onPlay: () => {
        console.log("onPlay")
        playing = true;
    },

    onTimerReady: (t) => {
        // ボタンを有効化する
        // Enable buttons
        if (!player.app.managed) {
            playBtn.disabled = false;

        }
    },

    onTimeUpdate: (position) => {
        if (!playing) {
            return;
        }
        const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~・、。・]/;

        let w = player.video.firstWord;

        while (w && w.startTime < position) {
            if (!punctuationRegex.test(w.text)) {
                if (!game.getWords().some((word) => word.word === w)) { // maybe store the last startime and compare it to this instead of a full array search ?
                    game.addWord(w);
                }
            }
            w = w.next;
        }
    }

});


