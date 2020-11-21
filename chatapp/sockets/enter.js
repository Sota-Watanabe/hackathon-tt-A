'use strict';

module.exports = function (socket) {

    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', function (userName) {
        const user = {
            userName: userName,
            socketId: socket.id,
            password: '',
            postTime: Date.now(),
            exitTime: Date.now(),
            enterTime: Date.now(),
        }
        
        const md = {
            id:Math.floor( Math.random() * 1000000 ),
            message:userName　+ "さんが入室しました",
            userName:"",
            kind:"入室",
            createDate:Date.now(),
            postDateTime:""
        }
        socket.broadcast.emit('enterOtherEvent', { md,user});
    });
};