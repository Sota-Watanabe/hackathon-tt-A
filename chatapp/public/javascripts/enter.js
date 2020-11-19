'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $("#userName").val();

// 入室メッセージイベントを送信する
socket.emit('sendEnterEvent', userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('enterOtherEvent', function (user) {
    addUser(user);
    $('#thread').prepend('<p>' + data.userName + 'さんが入室しました。'　+'</p>');
});
