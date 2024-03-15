function takeMeBack(){
    window.location(window.history.go (-1));
} 
function getHistoryLength(){
    var one = 1;
    one = window.history.length;
    return one;
}
//add below button to html file
//<a href= "javascript: void(0);" onclick= "takeMeBack();">Go Back</a>
