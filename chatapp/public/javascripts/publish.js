'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    // 投稿内容を送信
    const data = {
        userName, message
    }
    socket.emit('sendMessageEvent', data);
    // 入力欄を初期化する
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
  // 受け取った変数を定義するとこ
    const {userName, message} = data
    //$('#thread').prepend('<p>' + userName + 'さん : ' + message + '</p>');
    if ('content' in document.createElement('template')) {
      var tbody =document.querySelector('#thread');
      var template = document.querySelector('#thread-template');
      console.log(tbody);

      var clone = template.cloneNode(true); 
      var p=clone.querySelectorAll("p");
      //ここから書き換え
      p[0].textContent = userName;
      p[1].textContent = message;
      console.log(clone);
      
      //ここまで書き換え
      tbody.appendChild(clone);
      }
});
