'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージイベントを受信する
    socket.on('sendMessageEvent', function (data) {
        if (!data.message) {
            return;
        }
        // 全クライアントに送信
        io.sockets.emit('receiveMessageEvent',data);
    });
};
