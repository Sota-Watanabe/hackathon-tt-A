/* メッセージ型の配列 */
const messages = [];// message:Message

/* 
    interface Message {
        id:int　タグにつける予定
        userName: String,
        message:String,
        createDate: Date;
        追加予定
    }

*/

/*　追加したメッセージデータを返す */
function addMessage(data){
    const messageData = {
        id: 0,
        userName: data.userName,
        message: data.message,
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


