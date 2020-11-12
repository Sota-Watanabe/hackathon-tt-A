'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    const now = new Date();
    const month = now.getMonth()+1
    const date = now.getDate()
    // 投稿内容を送信
    const data = {
        userName: userName,
        message: message,
        postTime: {
            month: month,
            date: date,
        }
    }
    socket.emit('sendMessageEvent', data);
    // 入力欄を初期化する
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    const {userName, message, postTime} = data
    const {month, date} = postTime
    $('#thread').prepend('<p>' + month + '月' + date + '日' + '   '+ userName + 'さん : ' + message + '</p>');
});
