'use strict';

const publishInterval = 3000

function publishButtonInterval() {
    $("#systemlog").text("投稿は3秒のインターバルが必要です");
    $("#publish-button").prop("disabled", true);
    setTimeout(function () { 
        $("#systemlog").text("");
        $("#publish-button").prop("disabled", false); 
    }, publishInterval)
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
        id: 0,
        userName: userName,
        message: message,
        createDate: Date.now(),
        directUserName: '',
    }

    addMessage(data);

    socket.emit('sendMessageEvent', data);
    // 入力欄を初期化する
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
  // 受け取った変数を定義するとこ
    const userName = data.userName;
    const message = data.message;


    //$('#thread').prepend('<p>' + userName + 'さん : ' + message + '</p>');
    if ('content' in document.createElement('template')) {
      var tbody =document.querySelector('#thread');
      var template = document.querySelector('#thread-template');

      var clone = template.cloneNode(true); 
      var p=clone.querySelectorAll("p");
      //ここから書き換え
      p[0].textContent = userName;
      p[1].textContent = message;
      
      //ここまで書き換え
      tbody.appendChild(clone);
      }
});

$(".container").keydown(function(e){
    const key = e.keyCode || 0;
    if(key === 13){
        if (!e.shiftKey) {
            publish();
        }
        return false
    }
});
