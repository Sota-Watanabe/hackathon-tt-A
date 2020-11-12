'use strict';

function publishButtonInterval() {
    $("#systemlog").text("投稿は3秒のインターバルが必要です");
    $("#publish-button").prop("disabled", true);
    setTimeout(function () { 
        $("#systemlog").text("");
        $("#publish-button").prop("disabled", false); 
    }, 3000)
}
// 投稿メッセージをサーバに送信する
function publish() {
    publishButtonInterval()

    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    const data = {
        userName, message
    }
    socket.emit('sendMessageEvent', data);
    // 入力欄を初期化する
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    const { userName, message } = data
    $('#thread').prepend('<p>' + userName + 'さん : ' + message + '</p>');
});
