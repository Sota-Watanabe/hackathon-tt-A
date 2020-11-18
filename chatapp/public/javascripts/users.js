const users = [];

/*
interface User {
    userName: String,
    socketId: String,
    passWord: String || ""
    postTime: DateTime
    exitTime: DateTime
}

*/
function addUser(user){
    users.push(user);
}

function getUser(userName){
    const user = users.find(function(elm){
        return elm.userName == userName;
    });

    return user;
}

function getUserIndex(userName){
    const index = users.findIndex(function(elm){
        return elm.userName == userName;
    });

    return index; 
}

function renewExitDate(userName){
    const user = getUser(userName);
    const idx = getUserIndex(userName)
    
    user.exitDate = Date.now();
    users.splice(idx,1,user);
}

function renewPostDate(userName){
    const user = getUser(userName);
    const idx = getUserIndex(userName)
    
    user.postDate = Date.now();
    users.splice(idx,1,user);
}