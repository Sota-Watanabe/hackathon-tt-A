const userStorge = [];

/*
interface User {
    userName: String,
    socketId: String,
    passWord: String || ""
    postTime: DateTime
    exitTime: DateTime
    enterTime: DateTime
}

*/

function addUserAPI(user,users){
    users.push(user);
    return users
}

function getUserList(userStorge){
    return userStorge
}

/* userNameに対応するUser */
function getUser(userName){
    const user = users.find(function(elm){
        return elm.userName == userName;
    });

    return user;
}

function deleteUserAPI(userName,users){
    const index = users.findIndex(function(elm){
        return elm.userName == userName;
    });
    users.splice(index,1);
    return users;
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
    
    user.postTime = Date.now();
    users.splice(idx,1,user);
}

function renewEnterDate(userName){
    const user = getUser(userName);
    const idx = getUserIndex(userName)
    
    user.enterTime = Date.now();
    users.splice(idx,1,user);
    console.log(user);
}



/* 

15:　userのpostDateを参考する。投稿時にrenewPostDateを使う
21:　getuserでユーザーを取得、enterDateを参照する。入室時にrenewEnterDateを使う



*/