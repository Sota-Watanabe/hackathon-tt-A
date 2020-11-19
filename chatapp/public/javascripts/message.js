/* メッセージ型の配列 */
const messages = [];// message:Message

/* 
    interface Message {
        id:int　タグにつける予定
        userName: String,
        message:String,
        createDate: Date;
        directUserName:String;
    }

*/

/*　追加したメッセージデータを返す */
function addMessage(id,userName,message){
    const messageData = {
        id: id,
        userName: userName,
        message: message,
        createDate: Date.now()
    }

    messages.push(messageData);
    return messageData;
}

/*昇順で並び替えたメッセージ配列を返す */
function orderbyAsec(){
    messages.sort(function(a,b){
        return a.createDate - b.createDate;
    });
    return messages
}

/* 降順で並び替えたメッセージ配列を返す */
function orderbyDsec(){
    messages.sort(function(a,b){
        return b.createDate - a.createDate;
    });
    return messages;
}

/* 削除した後のメッセージ配列を変えす */
function deleteMessage(id){
    const index = messages.findIndex(function(elm){
        return elm.id == id;
    });
    messages.splice(index);
    return messages
}

/* user {id,userName,message} */

function directMessage(user,replyUserName){
    const messageData = {
        id: user.id,
        userName: user.userName,
        message: message.message,
        createDate: Date.now(),
        directUserName:replyUserName
    } 

    messages.add(meesageData);
    return messageData;
}



/*
8:  orderbydesec,orderbyAsecを使う
10: delteMessageを使う
11: userAPIでsocketIDを取得しsocketで指定,directMessageで渡すためのデータを作成する
*/
