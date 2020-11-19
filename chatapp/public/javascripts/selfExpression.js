/*
$(".self-expression").on('click',function(){
    console.log("test");
});*/
'use strict';

function expression(){
    const userName = $("#userName").val();
    const selfTag = $("." + userName);

    selfTag.css("color","red");

}