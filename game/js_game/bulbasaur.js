var motionFrame; //프레임

var bulbasaurStandCount=1; // stand 프레임카운터
var bulbasaurRunRightCount=1; // run 프레임카운터
var bulbasaurRunLeftCount=1;  // back 프레임카운터
var status;

var bulbasaurChange = function(){
      clearInterval(motionFrame);
      motionFrame=setInterval(function(){
          $('#target').attr('src','./img_game/bulbasaur/normal_right_'+bulbasaurStandCount+'.png');
          bulbasaurStandCount++;
          if(bulbasaurStandCount>3){bulbasaurStandCount=1}      
      },300);      
      setFrameWidth(($("#testTarget").width()/800.0));   
      user = bulbasaurMotion();
}

var bulbasaurMotion =
function(){
    var keyCount =0; //키보드 카운터

    // 대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/bulbasaur/normal_right_'+bulbasaurStandCount+'.png');
        bulbasaurStandCount++;
        if(bulbasaurStandCount>3){bulbasaurStandCount=1}
      },300);

    // 오른쪽 이동
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/bulbasaur/run_right_'+bulbasaurRunRightCount+'.png');
        bulbasaurRunRightCount++;
        if(bulbasaurRunRightCount>5){bulbasaurRunRightCount=1}
      },200);
    });
    // 왼쪽이동
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/bulbasaur/run_left_'+bulbasaurRunLeftCount+'.png');
        bulbasaurRunLeftCount++;
        if(bulbasaurRunLeftCount>5){bulbasaurRunLeftCount=1}
      },200)
    })
    // 왼쪽이동 후 대기
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/bulbasaur/normal_right_'+bulbasaurStandCount+'.png');
          bulbasaurStandCount++;
          if(bulbasaurStandCount>3){bulbasaurStandCount=1}
        },300);
      }
    });

    //키보드 이벤트
    $("html").keydown(function(e) {
        if(keyCount==0){
            if(e.keyCode == 39){ // 오른쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/bulbasaur/run_right_'+bulbasaurRunRightCount+'.png');
                bulbasaurRunRightCount++;
                if(bulbasaurRunRightCount>5){bulbasaurRunRightCount=1}
              },200);   
            }else if(e.keyCode == 37){ // 왼쪽 이동
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/bulbasaur/run_left_'+bulbasaurRunLeftCount+'.png');
                bulbasaurRunLeftCount++;
                if(bulbasaurRunLeftCount>5){bulbasaurRunLeftCount=1}
              },200)
            }
            keyCount=1;
        }
    }).keyup(function(e) { // 이동종료 후 대기
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/bulbasaur/normal_right_'+bulbasaurStandCount+'.png');
          bulbasaurStandCount++;
          if(bulbasaurStandCount>3){bulbasaurStandCount=1}
        },300);        
    }); 

}
