'use strict';

$(window).on('beforeunload',async function(){
    await room.exit();
});
