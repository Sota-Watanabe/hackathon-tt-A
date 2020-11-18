const messages = [];// message:Message

/* 
    interface Message {
        id:int
        userName: String,
        message:String,
        createDate: Date;
    }

*/

function addMessage(data){
    const messageData = {
        id: 0,
        userName: data.userName,
        message: data.message,
        createDate: Date.now()
        
    }

    messages.push(messageData);
}

function orderbyAsec(){
    messages.sort(function(a,b){
        return a.createDate - b.createDate;
    });
}

function orderbyDsec(){
    messages.sort(function(a,b){
        return b.createDate - a.createDate;
    });
}

function deleteMessage(id){
    const index = messages.findIndex(function(elm){
        return elm.id == id;
    });
    messages.splice(index);
}


