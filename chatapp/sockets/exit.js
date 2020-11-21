'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (userName) {
    const md = {
        id:0,
        message:userName　+ "さんが退出しました",
        userName:userName,
        kind:"退出",
        createDate:Date.now()
    }
    
    socket.broadcast.emit('exitOtherEvent', md);
    }); 
};
