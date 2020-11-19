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

/* userNameに対応するUser */
function getUser(userName){
    const user = users.find(function(elm){
        return elm.userName == userName;
    });

    return user;
}

/* userNameに対応するusersに格納されたuserのインデックス */
function getUserIndex(userName){
    const index = users.findIndex(function(elm){
        return elm.userName == userName;
    });

    return index; 
}

/* userNameに対応するUserを取り出し,
exitDateを更新する。*/
function renewExitDate(userName){
    const user = getUser(userName);
    const idx = getUserIndex(userName)
    
    user.exitDate = Date.now();
    users.splice(idx,1,user);
}


/* userNameに対応するUserを取り出し,
postDateを更新する。 
15のために必要　*/
function renewPostDate(userName){
    const user = getUser(userName);
    const idx = getUserIndex(userName)
    
    user.postDate = Date.now();
    users.splice(idx,1,user);
}