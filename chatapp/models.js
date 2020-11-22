const sqlite3 = require("sqlite3").verbose();

function getUserList(){
    const db = new sqlite3.Database('chatapp.sqlite3');
    const row = new Promise((resolve,reject)=>{
        db.all("select * from Users",(err,row)=>{
            resolve(row);
        });
    });
    db.close();
    return row;
}

function getUser(userName){
    const db = new sqlite3.Database('chatapp.sqlite3');
    const prepare = db.prepare("select * from Users WHERE userName= (?)");

    const user = new Promise((resolve,reject)=>{
        prepare.get(userName,(err,row)=>{
            resolve(row);
        });
    });
    
    prepare.finalize();
    db.close();
    return user;
}

function addUser(user){
    const db = new sqlite3.Database('chatapp.sqlite3');
    
    const prepare = db.prepare("insert into Users values (?,?,?,?,?,?,?)");
    prepare.run(user);
    prepare.finalize();
    db.close();
}

function deleteUser(userName){
    const db = new sqlite3.Database('chatapp.sqlite3');
    const prepare = db.prepare('DELETE FROM Users WHERE userName = (?)');
    prepare.run(userName);
    prepare.finalize();
    db.close();
}


async function main(){
    const data = await getUser("test");
    console.log(data);
    return data;
}

exports.getUserList = getUserList;
exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.main = main;