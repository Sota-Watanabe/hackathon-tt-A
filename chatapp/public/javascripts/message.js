/* メッセージ型の配列 */
const messages = [];// message:Message

/* 
    interface Message {
        id:int　タグにつける予定
        userName: String,
        message:String,
        createDate: Date;
        replyUserName:String;
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

function directMessage(data,replyUserName){
    const messageData = {
        id: 0,
        userName: data.userName,
        message: data.message,
        createDate: Date.now()
    } 
}



/*
8: orderbydesec,orderbyAsecを使う
10:　delteMessageを使う
11: 

*/
