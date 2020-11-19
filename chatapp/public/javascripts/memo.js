'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    // 入力されたメッセージを取得
    const message = $("#message").val();
    $('#message').val('');
    // メモの内容を表示
    //$('#thread').prepend('<p>' + userName + ":" + message +'</p>');
    if ('content' in document.createElement('template')) {
      var tbody =document.querySelector('#thread');
      var template = document.querySelector('#thread-template');

      var clone = template.cloneNode(true); 
      var p=clone.querySelectorAll("p");
      var div=clone.querySelectorAll("div");
      //ここから書き換え
      p[0].textContent = userName;
      p[1].textContent = message;
      div[0].classList.add("memo");
      
      //ここまで書き換え
      tbody.appendChild(clone);
      }

    return false;
}
