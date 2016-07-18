$(function(){
    var oUL = document.getElementsByClassName('time')[0];
    var oLi = oUL.getElementsByTagName('li');
    showPic(oUL);
    
}
);
function showTime() {
    var iNow = new Date();

    var iNew = new Date( 2017,2,1,0,0,0);
    
    var t = Math.floor((iNew - iNow)/1000);
    
    var str = Math.floor(t/86400);


    return str+'';
}

function showPic(obj){
    var oTime = showTime();
    var arrTime = [];
    var oLi = obj.getElementsByTagName('li');
    for(var i=0;i<oTime.length;i++){
        oLi[i].style.background = 'url(../img/time/'+parseInt(oTime.charAt(i))+'.png)';
        oLi[i].style.backgroundSize = 'cover';
    }
}

 
