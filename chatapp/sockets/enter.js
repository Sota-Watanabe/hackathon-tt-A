'use strict';
const models = require("../models");


module.exports = function (socket) {

    // 入室メッセージをクライアントに送信する
    socket.on('sendEnterEvent', async function (userName) {
        models.addUser([0,userName,socket.id,"",Date.now(),Date.now(),Date.now()]);
        const user = await models.getUser(userName);

        const md = {
            id:Math.floor( Math.random() * 1000000 ),
            message:userName　+ "さんが入室しました",
            userName:"",
            kind:"入室",
            createDate:Date.now(),
            postDateTime:""
        }

        socket.broadcast.emit('enterOtherEvent', { md , user });
    });
};