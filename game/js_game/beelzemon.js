var motionFrame; //프레임

var beelzemonStandCount=1; // stand 프레임카운터
var beelzemonRunCount=1; // run 프레임카운터
var beelzemonBackCount=1;  // back 프레임카운터
var beelzemonTransCount=8;
var status;

var beelzemonTransMotion =
function(){
  //라이딩폼 체인지
    clearInterval(motionFrame)
    motionFrame=setInterval(function(){
      //console.log(beelzemonTransCount);
      $('#target').attr('src','./img_game/beelzemon_ride/trans'+beelzemonTransCount+'.png');
      beelzemonTransCount--;
      if(beelzemonTransCount==0){clearInterval(motionFrame);beelzemonTransCount=8;}
    },70);
}

var beelzemonMotion =
function(){


    //달린 후 대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon/stand'+beelzemonStandCount+'.png');
        beelzemonStandCount++;
        if(beelzemonStandCount>5){beelzemonStandCount=1}
      },200);

    //달리기
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon/run'+beelzemonRunCount+'.png');
        beelzemonRunCount++;
        if(beelzemonRunCount>5){beelzemonRunCount=1}
      },100);
    });
    //뒤로가기
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon/back'+beelzemonBackCount+'.png');
        beelzemonBackCount++;
        if(beelzemonBackCount>5){beelzemonBackCount=1}
      },100)
    })
    //뒤로간후 스탠딩상태
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
}
