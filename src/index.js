import { Player } from "textalive-app-api";
import { Game } from "./game";
import { API_TOKEN } from "../untracked/config";

// 単語が発声されていたら #text に表示する

const player = new Player({ app: { token: API_TOKEN }, mediaElement: document.querySelector("#media") });

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

/**
 * Start a new game
 * - requests play
 * - set an interval to play the game (ganme.step) until game is finished
 */
function startGame() {

    player.timer.seek(0) // there to set to 0 position when starting a new game, otherwise the timer starts counting randomly...
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

        overlayStart.style.display = "block";
        playBtn.disabled = true;

        /**
         * play button to play a new game
         */
        playBtn.addEventListener(
            "click",
            () => {
                if (!playBtn.disabled) {
                    overlayStart.style.display = "none";
                    startGame();
                }
            }
        );

        /**
         * replay button to start a new game
         */
        replayBtn.addEventListener("click", () => {
            game.resetGame();
            overlayEndgame.style.display = "none";
            startGame();
        })

        /**
         * Mouse movement event to update the basket position
         */
        canvas.addEventListener('mousemove', (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;

            game.moveBasket(x);
        });


        if (!app.songUrl) {
            // SUPERHERO / めろくる
            // player.createFromSongUrl("https://piapro.jp/t/hZ35/20240130103028", {
            //     video: {
            //         // 音楽地図訂正履歴
            //         beatId: 4592293,
            //         chordId: 2727635,
            //         repetitiveSegmentId: 2824326,
            //         // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FhZ35%2F20240130103028
            //         lyricId: 59415,
            //         lyricDiffId: 13962
            //     },
            // });

            // いつか君と話したミライは / タケノコ少年
            // player.createFromSongUrl("https://piapro.jp/t/--OD/20240202150903", {
            //     video: {
            //         // 音楽地図訂正履歴
            //         beatId: 4592296,
            //         chordId: 2727636,
            //         repetitiveSegmentId: 2824327,
            //         // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2F--OD%2F20240202150903
            //         lyricId: 59416,
            //         lyricDiffId: 13963
            //     },
            // });

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

            // 未来交響曲 / ヤマギシコージ
            // player.createFromSongUrl("https://piapro.jp/t/Rejk/20240202164429", {
            //     video: {
            //         // 音楽地図訂正履歴
            //         beatId: 4592298,
            //         chordId: 2727638,
            //         repetitiveSegmentId: 2824329,
            //         // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FRejk%2F20240202164429
            //         lyricId: 59418,
            //         lyricDiffId: 13965
            //     },
            // });

            // リアリティ / 歩く人
            // player.createFromSongUrl("https://piapro.jp/t/ELIC/20240130010349", {
            //     video: {
            //         // 音楽地図訂正履歴
            //         beatId: 4592299,
            //         chordId: 2727639,
            //         repetitiveSegmentId: 2824330,
            //         // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FELIC%2F20240130010349
            //         lyricId: 59419,
            //         lyricDiffId: 13966
            //     },
            // });

            // The Marks / 2ouDNS
            // player.createFromSongUrl("https://piapro.jp/t/xEA7/20240202002556", {
            //     video: {
            //         // 音楽地図訂正履歴
            //         beatId: 4592300,
            //         chordId: 2727640,
            //         repetitiveSegmentId: 2824331,
            //         // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FxEA7%2F20240202002556
            //         lyricId: 59420,
            //         lyricDiffId: 13967
            //     },
            // });
            player.volume = 5;

        }




    },

    // Gets called for no reason sometimes
    onPlay: () => {
        console.log("onPlay")
        playing = true;
    },

    onTimerReady: (t) => {
        // Enable buttons
        if (!player.app.managed) {
            playBtn.disabled = false;
        }
    },

    onTimeUpdate: (position) => {
        // There to prevent word generation when app is not "playing" (There is an issue with the replay button where for 1 timer update the position will be at max, so it will gen all words)
        if (!playing) {
            return;
        }

        // Regex to remove words containing punctuations
        const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~・、。・「」『』【】（）？！“”：；〜…～‘’]/;

        let w = player.video.firstWord;

        while (w && w.startTime < position) {
            if (!punctuationRegex.test(w.text)) {
                if (!game.getWords().some((word) => word.word === w)) { //only add word if not present already
                    game.addWord(w);
                }
            }
            w = w.next;
        }
    }

});


