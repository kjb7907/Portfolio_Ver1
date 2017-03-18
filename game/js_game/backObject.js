 var backMotion = function(){
    var backMotionFrame;
    var objectCnt=0;

    //전진
    $('#run').mousedown(function(){
        console.log();
        backMotionFrame=setInterval(function(){
            $( "#testTarget" ).css({ "left": "-=15px" });
            $("#title").css({ "left": "-=15px" });
            objectCnt++;
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
                $( "#testTarget" ).css({ "left": "+=15px" });
                $( "#title" ).css({ "left": "+=15px" });
                objectCnt--;            
            }                 
        },33);                          
    })
    //
    .mouseup(function(){
        clearInterval(backMotionFrame);
    });
 }
 
