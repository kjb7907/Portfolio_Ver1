
 var backMotion = function(){
    var backMotionFrame; //백그라운드 모션 담기는 변수
    var objectCnt=0; //백그라운드 이동거리 카운터
    frameWidth=($("#testTarget").width()/800.0); //기본 1프레임당 이동거리 세팅
    maxFrame=$("#testTarget").width()/1.2;   
    console.log('1프레임당 이동거리 : '+frameWidth+' 최대이동거리 : '+maxFrame);

    //전진
    $('#run').mousedown(function(){
        console.log();
        backMotionFrame=setInterval(function(){
            //console.log(objectCnt); 
            if(objectCnt<maxFrame){
                $( "#testTarget" ).css({ "left":'-='+frameWidth+'px' });
                $("#title").css({ "left":'-='+frameWidth+'px' });
                objectCnt+=frameWidth;
            }          
        },20);
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
                $( "#testTarget" ).css({ "left":'+='+frameWidth+'px' });
                $( "#title" ).css({ "left":'+='+frameWidth+'px' });
                objectCnt-=frameWidth;            
            }                 
        },20);                          
    })
    //
    .mouseup(function(){
        clearInterval(backMotionFrame);
    });
 }

 //최대 이동범위
 var setMaxFrame = function(num){
    console.log('최대 이동범위 변경 '+num);
    maxFrame = num;
 }

 //1프레임당 이동거리 세팅
 var setFrameWidth = function(num){
    console.log('1프레임당 이동거리 변경 '+num);
    frameWidth = num;
 }
 
