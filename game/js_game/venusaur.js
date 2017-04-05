var motionFrame; //프레임

var venusaurStandCount=1; // stand 프레임카운터
var venusaurRunRightCount=1; // run 프레임카운터
var venusaurRunLeftCount=1;  // back 프레임카운터
var status;

var venusaurChange = function(){
      clearInterval(motionFrame);
      motionFrame=setInterval(function(){
          $('#target').attr('src','./img_game/venusaur/normal_right_'+venusaurStandCount+'.png');
          venusaurStandCount++;
          if(venusaurStandCount>3){venusaurStandCount=1}      
      },300);      
      setFrameWidth(($("#testTarget").width()/500.0));   
      user = venusaurMotion();
}

var venusaurMotion =
function(){
    var keyCount =0; //키보드 카운터

    // 대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/venusaur/normal_right_'+venusaurStandCount+'.png');
        venusaurStandCount++;
        if(venusaurStandCount>3){venusaurStandCount=1}
      },300);

    // 오른쪽 이동
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/venusaur/run_right_'+venusaurRunRightCount+'.png');
        venusaurRunRightCount++;
        if(venusaurRunRightCount>5){venusaurRunRightCount=1}
      },200);
    });
    // 왼쪽이동
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/venusaur/run_left_'+venusaurRunLeftCount+'.png');
        venusaurRunLeftCount++;
        if(venusaurRunLeftCount>5){venusaurRunLeftCount=1}
      },200)
    })
    // 왼쪽이동 후 대기
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/venusaur/normal_right_'+venusaurStandCount+'.png');
          venusaurStandCount++;
          if(venusaurStandCount>3){venusaurStandCount=1}
        },300);
      }
    });

    //키보드 이벤트
    $("html").keydown(function(e) {
        if(keyCount==0){
            if(e.keyCode == 39){ // 오른쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/venusaur/run_right_'+venusaurRunRightCount+'.png');
                venusaurRunRightCount++;
                if(venusaurRunRightCount>5){venusaurRunRightCount=1}
              },200);   
            }else if(e.keyCode == 37){ // 왼쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/venusaur/run_left_'+venusaurRunLeftCount+'.png');
                venusaurRunLeftCount++;
                if(venusaurRunLeftCount>5){venusaurRunLeftCount=1}
              },200)
            }
            keyCount=1;
        }
    }).keyup(function(e) { // 이동종료 후 대기
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/venusaur/normal_right_'+venusaurStandCount+'.png');
          venusaurStandCount++;
          if(venusaurStandCount>3){venusaurStandCount=1}
        },300);        
    }); 

}
