//const { default: Axios } = require("axios");

const room = new Vue({
    el:".container",
    data: {
        userName:"",
        messages:[],
        message:'',
        order:true,
        expressionPushed: false,
        users:[],
        showMember:false,
        directMessageUserName:"",
        canPublish:true,
    },
    methods:{

        post(kind){
            if(!this.message){
                return 0;
            }

            const md = {
                id:Math.floor( Math.random() * 1000000 ),
                message:this.message,
                userName:this.userName,
                kind:kind,
                createDate:Date.now(),
                postDateTime:getTimeAPI(),
            }

            if(this.order === true){
                this.messages.push(md);
            }else{
                this.messages.unshift(md);
            }
            this.message = ''; 
            $("textarea").val() = "";
            return md
        },

        publish(){
            if(!this.canPublish){
                return 0;
            }

            this.canPublish = false;

            const md = {
                id:Math.floor( Math.random() * 1000000 ),
                message:this.message,
                userName:this.userName,
                kind:"投稿",
                createDate:Date.now(),
                postDateTime:getTimeAPI(),
                directMessageUserName:this.directMessageUserName,
            }
            socket.emit('sendMessageEvent', md);
            this.message = "";
            
            setTimeout(function () { 
                this.canPublish = true;
            }.bind(this), 3000);
        },
        memo(){
            this.post("メモ");
        },
        reciveMessage(md){
            if(this.order === true){
                this.messages.push(md);
            }else{
                this.messages.unshift(md);
            }
        },
        deleteMessage(id){
            this.messages = deleteMessageApi(id,this.messages);
        },
        orderby(){
            if(this.order){
                this.messages = orderbyDsec(this.messages);
            }else{
                this.messages = orderbyAsec(this.messages);
            }
            this.order = !this.order;
            return false;
        },
        async exit(){
            await socket.emit("sendExitEvent",this.userName);
            location.href = "/"
        },

        addUser(user){
            this.users = addUserAPI(user,this.users);
        },

        deleteUser(exitUserName){
            this.users = deleteUserAPI(exitUserName,this.users);
        }
    },
    delimiters: ["<%", "%>"],
    mounted: async function(){
        const userName = $("#userName").val();
        this.userName = userName || "";

        socket.emit('sendEnterEvent', userName);
        const res = await axios.get('getUserList');
        this.users = res.data;
    },

});

socket.on('getUserList',function(users){
    room.getUserList(users);
})

socket.on('enterOtherEvent',function({ md, user }){
    room.reciveMessage(md);
    room.addUser(user);
});

socket.on('exitOtherEvent', function (data) {
    room.reciveMessage(data);
    room.deleteUser(data.userName);
});

socket.on('receiveMessageEvent', function (data) {
    room.reciveMessage(data);
});

socket.on('reciveDirectMessageEvent', function (data) {
    console.log("hello");
    room.reciveMessage(data);
});