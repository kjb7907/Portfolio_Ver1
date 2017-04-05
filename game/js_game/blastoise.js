var motionFrame; //프레임

var blastoiseStandCount=1; // stand 프레임카운터
var blastoiseRunRightCount=1; // run 프레임카운터
var blastoiseRunLeftCount=1;  // back 프레임카운터
var status;

var blastoiseChange = function(){
      clearInterval(motionFrame);
      motionFrame=setInterval(function(){
          $('#target').attr('src','./img_game/blastoise/normal_right_'+blastoiseStandCount+'.png');
          blastoiseStandCount++;
          if(blastoiseStandCount>7){blastoiseStandCount=1}      
      },200);      
      setFrameWidth(($("#testTarget").width()/500.0));   
      user = blastoiseMotion();
}

var blastoiseMotion =
function(){
    var keyCount =0; //키보드 카운터

    // 대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/blastoise/normal_right_'+blastoiseStandCount+'.png');
        blastoiseStandCount++;
        if(blastoiseStandCount>7){blastoiseStandCount=1}
      },200);

    // 오른쪽 이동
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/blastoise/run_right_'+blastoiseRunRightCount+'.png');
        blastoiseRunRightCount++;
        if(blastoiseRunRightCount>8){blastoiseRunRightCount=1}
      },200);
    });
    // 왼쪽이동
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/blastoise/run_left_'+blastoiseRunLeftCount+'.png');
        blastoiseRunLeftCount++;
        if(blastoiseRunLeftCount>8){blastoiseRunLeftCount=1}
      },200)
    })
    // 왼쪽이동 후 대기
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/blastoise/normal_right_'+blastoiseStandCount+'.png');
          blastoiseStandCount++;
          if(blastoiseStandCount>7){blastoiseStandCount=1}
        },200);
      }
    });

    //키보드 이벤트
    $("html").keydown(function(e) {
        if(keyCount==0){
            if(e.keyCode == 39){ // 오른쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/blastoise/run_right_'+blastoiseRunRightCount+'.png');
                blastoiseRunRightCount++;
                if(blastoiseRunRightCount>8){blastoiseRunRightCount=1}
              },200);   
            }else if(e.keyCode == 37){ // 왼쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/blastoise/run_left_'+blastoiseRunLeftCount+'.png');
                blastoiseRunLeftCount++;
                if(blastoiseRunLeftCount>8){blastoiseRunLeftCount=1}
              },200)
            }
            keyCount=1;
        }
    }).keyup(function(e) { // 이동종료 후 대기
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/blastoise/normal_right_'+blastoiseStandCount+'.png');
          blastoiseStandCount++;
          if(blastoiseStandCount>7){blastoiseStandCount=1}
        },200);        
    }); 

}
