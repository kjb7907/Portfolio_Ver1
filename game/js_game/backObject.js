 var backMotion = function(){
    var backMotionFrame;
    var objectCnt=0;
    var backWidth=($("#testTarget").width()/500);

    //전진
    $('#run').mousedown(function(){
        console.log();
        backMotionFrame=setInterval(function(){
            console.log(objectCnt); 
            if(objectCnt<408){
                $( "#testTarget" ).css({ "left":'-='+backWidth+'px' });
                $("#title").css({ "left":'-='+backWidth+'px' });
                objectCnt++;
            }          
        },33);
    //
    }).mouseup(function(){
        clearInterval(backMotionFrame);
    });

    //후진
    $('#back').mousedown(function(){
        if(objectCnt>0){
         
        }     
        backMotionFrame=setInterval(function(){
            if(objectCnt>0){
                $( "#testTarget" ).css({ "left":'+='+backWidth+'px' });
                $( "#title" ).css({ "left":'+='+backWidth+'px' });
                objectCnt--;            
            }                 
        },33);                          
    })
    //
    .mouseup(function(){
        clearInterval(backMotionFrame);
    });
 }
 
