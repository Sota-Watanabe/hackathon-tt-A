'use strict';

const express = require('express');
const models = require('../models');

const router = express.Router();

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room',async function(request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
    
    if(await models.getUser(request.body.userName)){
        response.redirect("/");
    }

    response.render('room', { userName: request.body.userName });
});

// 入室時の処理
router.post('/enterUserAdd',async function(req,res){
    const user = [0,req.body.userName,req.body.socket_id,"",Date.now(),Date.now(),Date.now()];
    //await models.addUser(user);

    res.send(user); 
});

router.get('/getUserList',async function(req,res){
    const data = await models.getUserList();
    res.send(data);
});

module.exports = router;
