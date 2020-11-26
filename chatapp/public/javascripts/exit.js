'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent',userName);

    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('exitOtherEvent', function (data) {
 //   $('#thread').prepend('<p>'+ data + 'さんが退出しました。</p>');
    if ('content' in document.createElement('template')) {
      var tbody =document.querySelector('#thread');
      var e_template = document.querySelector('#exit-template');

      var clone_exit = e_template.cloneNode(true); 
      var p=clone_exit.querySelectorAll("p");
      var div=clone_exit.querySelectorAll("div");
      //ここから書き換え
      p[0].textContent = userName+"さんが退出しました。";
      
      //ここまで書き換え
      tbody.appendChild(clone_exit);
      }


});
