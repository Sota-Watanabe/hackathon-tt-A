'use strict';

const models = require("../models");

module.exports = function (socket, io) {
    // 投稿メッセージイベントを受信する
    socket.on('sendMessageEvent', async function (data) {
        if (!data.message) {
            return;
        }

        if(data.directMessageUserName != ""){
            const user = await models.getUser(data.directMessageUserName);
            console.log(user.socket_id);
            io.to(user.socket_id).emit('reciveDirectMessageEvent', data);
        }else{
            // 全クライアントに送信
            io.sockets.emit('receiveMessageEvent',data);
        }
    });
};
