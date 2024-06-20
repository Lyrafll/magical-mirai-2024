import { Player } from "textalive-app-api";

// 単語が発声されていたら #text に表示する


class WordProjectile {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
    }
}

const animateWord = function (now, unit) {

    if (unit.contains(now)) {
        //console.log(unit.text)
        let word = new WordProjectile(unit.text, 10, 10);
        document.querySelector("#text").textContent += unit.text;
        //console.log(word.text);

    }

};

const player = new Player({ app: { token: "eZ2xkHnnUWrJKQRG" }, mediaElement: document.querySelector("#media") });

const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");

const words = [];

player.addListener({
    onAppReady: (app) => {

        playBtn.addEventListener(
            "click",
            () =>
                player.video &&
                player.requestPlay()
        );
        pauseBtn.addEventListener(
            "click",
            () =>
                player.video &&
                player.requestPause()
        );


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

        const current = player.timer.position;
        //console.log(position)

        // 定期的に呼ばれる各単語の "animate" 関数をセットする
        let w = player.video.firstChar;
        let lyrics = "";
        while (w && w.startTime < current) {
            console.log("-----------------------------------");
            if (!words.includes(w)) { // maybe store the last startime and compare it to this instead of a full array search ?

                words.push(w);

                // Do what we want with the new word
                //w.animate = animateWord;
                document.querySelector("#text").textContent += w.text;
            }
            //lyrics += w.text;
            // w.animate = animateWord;
            w = w.next;
        }
    }

});


