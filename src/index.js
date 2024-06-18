import { Player } from "textalive-app-api";

// 単語が発声されていたら #text に表示する

const animateWord = function (now, unit) {

    if (unit.contains(now)) {

        document.querySelector("#text").textContent = unit.text;

    }

};

const player = new Player({ app: { token: "eZ2xkHnnUWrJKQRG" }, mediaElement: document.querySelector("#media") });

const playBtn = document.querySelector("#play");

player.addListener({
    onAppReady: (app) => {

        playBtn.addEventListener(
            "click",
            () =>
                player.video &&
                player.requestPlay()
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
        }
    },

    // 動画オブジェクトの準備が整ったとき（楽曲に関する情報を読み込み終わったとき）に呼ばれる

    onVideoReady: (v) => {

        // 定期的に呼ばれる各単語の "animate" 関数をセットする

        let w = player.video.firstWord;


        while (w) {

            w.animate = animateWord;

            w = w.next;

        }

    },

    onTimerReady: (t) => {
        // ボタンを有効化する
        // Enable buttons
        if (!player.app.managed) {
            playBtn.disabled = false;
        }
    }

});