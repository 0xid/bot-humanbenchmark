var i = 0;
function start($,i){
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window, 1, 292, 337, 292, 337, false, false, false, false, 0, null);
    var time = 80;
    if( document.getElementsByClassName('reaction-time-test view-splash').length > 0 ){
        $('.reaction-time-test').dispatchEvent(event);
    }
    if( document.getElementsByClassName('reaction-time-test view-result').length > 0 ){
        $('.reaction-time-test').dispatchEvent(event);
    }
    if( document.getElementsByClassName('reaction-time-test view-go').length > 0 ){
        $('.reaction-time-test').dispatchEvent(event);
        var time = 700;
        i++;
    }
    setTimeout(function(){
        if(i<5){
	    start($,i);
        }
    },time);
}
start($,i);
