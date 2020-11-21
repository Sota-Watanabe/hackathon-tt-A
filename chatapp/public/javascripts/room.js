const room = new Vue({
    el:".container",
    data: {
        userName:"",
        messages:[],
        message:'',
        order:true,
        expressionPushed: false,
        users:[]
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
                postDateTime:getTimeAPI()
            }

            if(this.order === true){
                this.messages.push(md);
            }else{
                this.messages.unshift(md);
            }
            this.message = ''; 
            return md
        },

        publish(){
            const md = {
                id:Math.floor( Math.random() * 1000000 ),
                message:this.message,
                userName:this.userName,
                kind:"投稿",
                createDate:Date.now(),
                postDateTime:getTimeAPI()
            }
            socket.emit('sendMessageEvent', md);
            this.message = "";
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
        exit(){
            socket.emit("sendExitEvent",this.userName);
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
    mounted: function(){
        const userName = $("#userName").val();
        this.userName = userName || "";
        socket.emit('sendEnterEvent', userName);
    },

});

socket.on('getUserList',function(users){
    room.getUserList(users);
})

socket.on('enterOtherEvent',function({md,user}){
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