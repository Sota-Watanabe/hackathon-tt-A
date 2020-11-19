'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', function (data) {
        const user = {
            userName: data,
            socketId: socket.id,
            password: '',
            postTime: Date.now(),
            exitTime: Date.now(),
            enterTime: Date.now(),
        }
        socket.broadcast.emit('enterOtherEvent', { user });
    });
};