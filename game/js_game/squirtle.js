var motionFrame; //프레임

var squirtleStandCount=1; // stand 프레임카운터
var squirtleRunRightCount=1; // run 프레임카운터
var squirtleRunLeftCount=1;  // back 프레임카운터
var status;

var squirtleChange = function(){
      clearInterval(motionFrame);
      motionFrame=setInterval(function(){
          $('#target').attr('src','./img_game/squirtle/normal_right_'+squirtleStandCount+'.png');
          squirtleStandCount++;
          if(squirtleStandCount>3){squirtleStandCount=1}      
      },300);      
      setFrameWidth(($("#testTarget").width()/800.0));   
      user = squirtleMotion();
}

var squirtleMotion =
function(){
    var keyCount =0; //키보드 카운터

    // 대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/squirtle/normal_right_'+squirtleStandCount+'.png');
        squirtleStandCount++;
        if(squirtleStandCount>3){squirtleStandCount=1}
      },300);

    // 오른쪽 이동
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/squirtle/run_right_'+squirtleRunRightCount+'.png');
        squirtleRunRightCount++;
        if(squirtleRunRightCount>6){squirtleRunRightCount=1}
      },200);
    });
    // 왼쪽이동
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/squirtle/run_left_'+squirtleRunLeftCount+'.png');
        squirtleRunLeftCount++;
        if(squirtleRunLeftCount>6){squirtleRunLeftCount=1}
      },200)
    })
    // 왼쪽이동 후 대기
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/squirtle/normal_right_'+squirtleStandCount+'.png');
          squirtleStandCount++;
          if(squirtleStandCount>3){squirtleStandCount=1}
        },300);
      }
    });

    //키보드 이벤트
    $("html").keydown(function(e) {
        if(keyCount==0){
            if(e.keyCode == 39){ // 오른쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/squirtle/run_right_'+squirtleRunRightCount+'.png');
                squirtleRunRightCount++;
                if(squirtleRunRightCount>6){squirtleRunRightCount=1}
              },200);   
            }else if(e.keyCode == 37){ // 왼쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/squirtle/run_left_'+squirtleRunLeftCount+'.png');
                squirtleRunLeftCount++;
                if(squirtleRunLeftCount>6){squirtleRunLeftCount=1}
              },200)
            }
            keyCount=1;
        }
    }).keyup(function(e) { // 이동종료 후 대기
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/squirtle/normal_right_'+squirtleStandCount+'.png');
          squirtleStandCount++;
          if(squirtleStandCount>3){squirtleStandCount=1}
        },300);        
    }); 

}
