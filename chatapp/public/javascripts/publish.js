'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    const now = new Date();
    const hours = zeroPadding(now.getHours())
    const minutes = zeroPadding(now.getMinutes())
    const seconds = zeroPadding(now.getSeconds())

    const data = {
        userName: userName,
        message: message,
        postTime: {
            hours, minutes, seconds
        }
    }
    socket.emit('sendMessageEvent', data);
    // 入力欄を初期化する
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    const { userName, message, postTime } = data
    const { hours, minutes, seconds } = postTime
    if ('content' in document.createElement('template')) {
        var clone = $($('#messageTemplate').html());
        $('td', clone).eq(0).text(userName + ': ');
        $('td', clone).eq(1).text('「' + message + '」');
        $('td', clone).eq(2).text(hours + ':' + minutes + ':' + seconds);
        $('#thread').prepend(clone);

    } else {
        console.log('ブラウザが対応していません')
    }

});

function zeroPadding(value) {
    if (value < 10){
        return '0' + value
    }
    return value;
}
