var motionFrame; //프레임

var beelzemonStandCount=1; // stand 프레임카운터
var beelzemonRunCount=1; // run 프레임카운터
var beelzemonBackCount=1;  // back 프레임카운터
var beelzemonTransCount=8;
var status;

var beelzemonTransMotion =
function(){
  //기본 폼 체인지
    clearInterval(motionFrame)
    motionFrame=setInterval(function(){
      $('#target').attr('src','./img_game/beelzemon_ride/trans'+beelzemonTransCount+'.png');
      beelzemonTransCount--;
      if(beelzemonTransCount==0){clearInterval(motionFrame);beelzemonTransCount=8;}
    },70);
}

var beelzemonMotion =
function(){
    var keyCount =0; //키보드 카운터

    //대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon/stand'+beelzemonStandCount+'.png');
        beelzemonStandCount++;
        if(beelzemonStandCount>5){beelzemonStandCount=1}
      },200);

    //전진
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon/run'+beelzemonRunCount+'.png');
        beelzemonRunCount++;
        if(beelzemonRunCount>5){beelzemonRunCount=1}
      },100);
    });
    //후진
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon/back'+beelzemonBackCount+'.png');
        beelzemonBackCount++;
        if(beelzemonBackCount>5){beelzemonBackCount=1}
      },100)
    })
    //후진 종료
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/beelzemon/stand'+beelzemonStandCount+'.png');
          beelzemonStandCount++;
          if(beelzemonStandCount>5){beelzemonStandCount=1}
        },200);
      }
    });

    //키보드 이벤트
    $(document).keydown(function(e) {
        if(keyCount==0){
            if(e.keyCode == 39){ //전진
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/beelzemon/run'+beelzemonRunCount+'.png');
                beelzemonRunCount++;
                if(beelzemonRunCount>5){beelzemonRunCount=1}
              },100);  
            }else if(e.keyCode == 37){ //후진
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/beelzemon/back'+beelzemonBackCount+'.png');
                beelzemonBackCount++;
                if(beelzemonBackCount>5){beelzemonBackCount=1}
              },100)
            }
            keyCount=1;
        }
    }).keyup(function(e) { // 전진,후진 종료
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/beelzemon/stand'+beelzemonStandCount+'.png');
          beelzemonStandCount++;
          if(beelzemonStandCount>5){beelzemonStandCount=1}
        },200);        
    }); 

}
