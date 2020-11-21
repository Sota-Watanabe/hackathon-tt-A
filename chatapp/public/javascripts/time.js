function getTimeAPI(){
    const now = new Date();
    const mounth = now.getMonth() + 1;
    const day = now.getDate();
    const hours = zeroPadding(now.getHours())
    const minutes = zeroPadding(now.getMinutes())
    const seconds = zeroPadding(now.getSeconds())

    const postTime = mounth + "/" + day + "/" +hours + ":"　+ minutes + "";
    return postTime;
}

function zeroPadding(value) {
    if (value < 10){
        return '0' + value
    }
    return value;
}