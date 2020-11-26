'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $("#userName").val();

// 入室メッセージイベントを送信する
socket.emit('sendEnterEvent', userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('enterOtherEvent', function (data) {
    //$('#thread').prepend('<p>' + data + 'さんが入室しました。'　+'</p>');
    if ('content' in document.createElement('template')) {
      var tbody =document.querySelector('#thread');
      var e_template = document.querySelector('#exit-template');

      var clone_enter = e_template.cloneNode(true); 
      var p=clone_enter.querySelectorAll("p");
      var div=clone_enter.querySelectorAll("div");
      //ここから書き換え
      p[0].textContent = userName+"さんが入室しました。";
      
      //ここまで書き換え
      tbody.appendChild(clone_enter);
      }


});
