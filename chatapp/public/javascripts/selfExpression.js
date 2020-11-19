/*
$(".self-expression").on('click',function(){
    console.log("test");
});*/
'use strict';
var selfCommentExpressionFlag = false

function expression() {
    const userName = $("#userName").val();
    const selfTag = $("." + userName);

    if (selfCommentExpressionFlag == true) {
        selfTag.css("color", "black");
        selfTag.removeAttr('font-weight');
        $("#expression-button").text("自分のコメントを強調");
        selfCommentExpressionFlag = false
        return
    }

    selfTag.css("color", "red");
    selfTag.css("font-weight", "bold");
    $("#expression-button").text("自分のコメントを強調しない");
    selfCommentExpressionFlag = true
    return
}
