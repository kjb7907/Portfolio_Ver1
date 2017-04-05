var motionFrame; //프레임

var charizardStandCount=1; // stand 프레임카운터
var charizardRunRightCount=1; // run 프레임카운터
var charizardRunLeftCount=1;  // back 프레임카운터
var status;

var charizardChange = function(){
      clearInterval(motionFrame);
      motionFrame=setInterval(function(){
          $('#target').attr('src','./img_game/charizard/normal_right_'+charizardStandCount+'.png');
          charizardStandCount++;
          if(charizardStandCount>7){charizardStandCount=1}      
      },300);       
      setFrameWidth(($("#testTarget").width()/300.0));
      user = charizardMotion();
}

var charizardMotion =
function(){
    var keyCount =0; //키보드 카운터

    // 대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/charizard/normal_right_'+charizardStandCount+'.png');
        charizardStandCount++;
        if(charizardStandCount>7){charizardStandCount=1}
      },200);

    // 오른쪽 이동
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/charizard/run_right_'+charizardRunRightCount+'.png');
        charizardRunRightCount++;
        if(charizardRunRightCount>4){charizardRunRightCount=1}
      },200);
    });
    // 왼쪽이동
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/charizard/run_left_'+charizardRunLeftCount+'.png');
        charizardRunLeftCount++;
        if(charizardRunLeftCount>4){charizardRunLeftCount=1}
      },200)
    })
    // 왼쪽이동 후 대기
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/charizard/normal_right_'+charizardStandCount+'.png');
          charizardStandCount++;
          if(charizardStandCount>7){charizardStandCount=1}
        },200);
      }
    });

    //키보드 이벤트
    $("html").keydown(function(e) {
        if(keyCount==0){
            if(e.keyCode == 39){ // 오른쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/charizard/run_right_'+charizardRunRightCount+'.png');
                charizardRunRightCount++;
                if(charizardRunRightCount>4){charizardRunRightCount=1}
              },200);   
            }else if(e.keyCode == 37){ // 왼쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/charizard/run_left_'+charizardRunLeftCount+'.png');
                charizardRunLeftCount++;
                if(charizardRunLeftCount>4){charizardRunLeftCount=1}
              },200)
            }
            keyCount=1;
        }
    }).keyup(function(e) { // 이동종료 후 대기
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/charizard/normal_right_'+charizardStandCount+'.png');
          charizardStandCount++;
          if(charizardStandCount>7){charizardStandCount=1}
        },200);        
    }); 

}
