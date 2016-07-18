$(function(){
    var scrH = 0;

    var index = 0;

    $('#menu>li').click(function(){
        index = $(this).index();

        srcH = ($(window).height())*index;

        $('#menu>li').attr('class','fl');
        
        $(this).attr('class','fl active');

        $('html,body').animate({scrollTop:srcH},500);

    });



    var topBt = $(window).scrollTop();
    var onOff = true;

    if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C
    window.onmousewheel=document.onmousewheel=scrollFunc;

    function scrollFunc(ev) { 

        ev = ev || window.event;
        if(onOff == true){

            onOff = false;

            var nowTopBt = $(window).scrollTop();
           
                if(ev.wheelDelta){
                    if(ev.wheelDelta<0){
                        index++;
                    }else{
                        index--;

                    }
                }else if(ev.detail){
                    if(ev.detail>0){
                        index++;
                    }else{
                        index--;
                    }
                }
                
            if(index < 0){
                index = 0;
            }
            if(index >3 ){
                index = 3;
            }

            console.log(index);
            
            srcH = ($(window).height())*index;
          
            $('html,body').animate({scrollTop:srcH},1000,'easeInQuint',function(){
             
                    $('#menu>li').attr('class','fl');
        
                    $('#menu>li:eq('+index+')').attr('class','fl active');                   
                

                onOff = true;
               
            });
        }
    }

});