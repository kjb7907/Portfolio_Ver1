var motionFrame; //프레임

var beelzemonRideStandCount=1; // stand 프레임카운터
var beelzemonRideRunCount=1; // run 프레임카운터
var beelzemonRideBackCount=1;  // back 프레임카운터
var beelzemonRideTransCount=1;  // trans 프레임카운터
var status;

var beelzemonRideTransMotion =
function(){
  //라이딩폼 체인지
    clearInterval(motionFrame)
    motionFrame=setInterval(function(){
      $('#target').attr('src','./img_game/beelzemon_ride/trans'+beelzemonRideTransCount+'.png');
      beelzemonRideTransCount++;
      if(beelzemonRideTransCount>8){clearInterval(motionFrame);beelzemonRideTransCount=1;}
    },70);
}


var  beelzemonRideMotion =
function(){
    var keyCount =0; //키보드 카운터

    //대기상태
    $('#run').mouseup(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon_ride/stand'+beelzemonRideStandCount+'.png');
        beelzemonRideStandCount++;
        if(beelzemonRideStandCount>5){beelzemonRideStandCount=1}
      },200);

    //전진
    }).mousedown(function(){
      clearInterval(motionFrame);
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon_ride/run'+beelzemonRideRunCount+'.png');
        beelzemonRideRunCount++;
        if(beelzemonRideRunCount>5){beelzemonRideRunCount=1}
      },100);
    });
    //후진
    $('#back').mousedown(function(){
      clearInterval(motionFrame);
      status='back';
      motionFrame = setInterval(function(){
        $('#target').attr('src','./img_game/beelzemon_ride/back'+beelzemonRideBackCount+'.png');
        beelzemonRideBackCount++;
        if(beelzemonRideBackCount>5){beelzemonRideBackCount=1}
      },100)
    })
    //후진 종료
    .mouseup(function(){
      if(status=='back'){
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/beelzemon_ride/stand'+beelzemonRideStandCount+'.png');
          beelzemonRideStandCount++;
          if(beelzemonRideStandCount>5){beelzemonRideStandCount=1}
        },200);
      }
    });

    //키보드 이벤트
    $("html").keydown(function(e) { //전진
        if(keyCount==0){
            if(e.keyCode == 39){
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/beelzemon_ride/run'+beelzemonRideRunCount+'.png');
                beelzemonRideRunCount++;
                if(beelzemonRideRunCount>5){beelzemonRideRunCount=1}
              },100);   
            }else if(e.keyCode == 37){ //후진
              clearInterval(motionFrame);
              motionFrame = setInterval(function(){
                $('#target').attr('src','./img_game/beelzemon_ride/back'+beelzemonRideBackCount+'.png');
                beelzemonRideBackCount++;
                if(beelzemonRideBackCount>5){beelzemonRideBackCount=1}
              },100)
            }
            keyCount=1;
        }
    }).keyup(function(e) { //전진,후진 종료
        keyCount=0;
        clearInterval(motionFrame);
        motionFrame = setInterval(function(){
          $('#target').attr('src','./img_game/beelzemon_ride/stand'+beelzemonRideStandCount+'.png');
          beelzemonRideStandCount++;
          if(beelzemonRideStandCount>5){beelzemonRideStandCount=1}
        },200);      
    });   

}


// var beelzemonRide = {
//
//         transCount:1, //트랜스폼 이미지 번호
//         standCount:1, //스탠딩 이미지모션 번호
//         runCount:1, //run 이미지모션 번호
//         backCount:1, //back 이미지모션 번호
//
//         stand:null, //스탠딩 프레임
//         run:null, //run 프레임
//         back:null, //back 프레임
//         trans:null, //trans 프레임
//
//         transForm:function(){
//           //체인지폼 동작
//           beelzemonRide.trans = setInterval(function(){
//             $('#target').attr('src','./img_game/beelzemon_ride/trans'+beelzemonRide.transCount+'.png');
//             beelzemonRide.transCount++;
//             if(beelzemonRide.transCount>8){
//               clearInterval(beelzemonRide.trans);
//             }
//           },50);
//         },
//
//         move:function(){
//
//           //기본동작
//           beelzemonRide.stand = setInterval(function(){ //스탠딩모션
//             console.log('ride_//기본 스탠딩 모션');
//             $('#target').attr('src','./img_game/beelzemon_ride/stand'+beelzemonRide.standCount+'.png');
//             beelzemonRide.standCount++;
//             if(beelzemonRide.standCount>5){beelzemonRide.standCount=1}
//           },200);
//
//           //run
//           $('#run')
//           .mousedown(function(){ //마우스 누르고있는경우 달리기모션
//               motionClose();
//               beelzemonRide.run = setInterval(function(){
//               console.log('ride_//마우스 누르고있는경우 달리기모션');
//               $('#target').attr('src','./img_game/beelzemon_ride/run'+beelzemonRide.runCount+'.png');
//               beelzemonRide.runCount++;
//               if(beelzemonRide.runCount>5){beelzemonRide.runCount=1}
//             },100);
//           }).mouseup(function(){ //마우스 땠을경우 스탠딩모션
//               motionClose();
//               beelzemonRide.stand = setInterval(function(){
//               console.log('ride_//마우스 땠을경우 스탠딩모션');
//               $('#target').attr('src','./img_game/beelzemon_ride/stand'+beelzemonRide.standCount+'.png');
//               if(beelzemonRide.standCount>5){beelzemonRide.standCount=1}
//               beelzemonRide.standCount++;
//             },200);
//           });
//           //back
//           $('#back')
//           .mousedown(function(){ //마우스 누르고있는경우 달리기모션
//               motionClose();
//               beelzemonRide.run = setInterval(function(){
//               console.log('ride_//마우스 누르고있는경우 백모션');
//               $('#target').attr('src','./img_game/beelzemon_ride/back'+beelzemonRide.backCount+'.png');
//               beelzemonRide.backCount++;
//               if(beelzemonRide.backCount>5){beelzemonRide.backCount=1}
//             },100);
//           }).mouseup(function(){ //마우스 땠을경우 스탠딩모션
//               motionClose();
//               beelzemonRide.stand = setInterval(function(){
//               console.log('ride_//마우스 떘을경우 스탠딩모션');
//               $('#target').attr('src','./img_game/beelzemon_ride/stand'+beelzemonRide.standCount+'.png');
//               beelzemonRide.standCount++;
//               if(beelzemonRide.standCount>5){beelzemonRide.standCount=1}
//             },200);
//           });
//         },
//         motionClose:function(){
//           clearInterval(beelzemonRide.stand);
//           clearInterval(beelzemonRide.run);
//           clearInterval(beelzemonRide.back);
//           clearInterval(beelzemonRide.trans);
//         }
//
// }
