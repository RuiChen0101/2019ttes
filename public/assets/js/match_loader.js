function matchRecord(game){
  var records=[];
  switch (game) {
    case 'kartRider':
      records=[
        "P-1 2019/04/23 你各位啊：隨便啦 7：0 *",
        "P-2 2019/04/23 南部小孩：ㄅㄆㄇㄈㄉㄊㄋ 0：7 *",
        "P-4 2019/04/23 來想個好隊名：台北醫學大學店 7：1 https://youtu.be/jnN2Q-OK38Q",
        "P-6 2019/04/25 譚老大通訊系統：樸樓好醜不要蓋 0：7 https://youtu.be/yxpAwp9X270"
      ];
      break;

    case 'hearthStone':
      records=[
        "P-4 2019/02/25 李小珀#3584：stopfish #4534 2：3 *",
        "P-5 2019/02/24 youch6165#3863：ETWang#11993 3：2 *"
      ];
      break;

    case 'cytus2-8':
      records=[
        "組別 玩家名稱 晉級 第一首分數 第二首分數 曲目總分",
      ];
      break;

    case 'rainbowSix':
      records=[
        "32-1 2019/02/17 這樣剛好七個字：這樣好像七個字 7：1 *",
        "32-3 2019/02/18 這樣剛好七個字：這樣好像七個字 5：7 https://youtu.be/Ln-n6JiRDZc"
      ];
      break;

    case 'starCraft2':
      records=[
        "P-1 2019/04/22 PenutChen#4138：youch6165#3863 2：0 https://youtu.be/1KYcJwhc1Tk",
        "P-2 2019/04/22 帥哥#3797：JOHNYOU#4894 2：0 *"
      ];
      break;
  }
  return records;
}

function loadMatchCytus(game,round,roundTitle){
  var i,j;
  var records=matchRecord(game+"-"+round);
  var templateId=["class","name","up","scro1","score2","total"];
  var title=document.createElement("h2");
  title.innerHTML=roundTitle;
  document.getElementById(game).getElementsByClassName('mu-progress-recent')[0].appendChild(title);

  for(i=0 ; i<records.length ; i++){
    var matchContent = records[i].split(' ');
    var template = document.getElementById('cytus-single-match-template').content.cloneNode(true);

    for(j=0 ; j<matchContent.length ; j++){
      if (matchContent[j]=='-'){
        template.getElementById(templateId[j]).innerHTML="<p> </p>";
        continue;
      }
      template.getElementById(templateId[j]).innerHTML="<p>"+matchContent[j]+"</p>";
    }

    var target=document.getElementById(game).getElementsByClassName('mu-progress-recent');
    target[0].appendChild(template);
  }
}

function loadMatch(game){
  var i,j;
  var records=matchRecord(game);
  var templateId=["number","time","match_team","result","record"];
  for(i=0 ; i<records.length ; i++){
    var matchContent = records[i].split(' ');
    var template = document.getElementById('single-match-template').content.cloneNode(true);

    for(j=0 ; j<matchContent.length-1 ; j++){
      template.getElementById(templateId[j]).innerHTML="<p>"+matchContent[j]+"</p>";
    }

    if(matchContent[4]=="*"){
      template.getElementById(templateId[4]).innerHTML="<p>無紀錄</p>";
    }else{
      template.getElementById(templateId[4]).innerHTML='<a href="'+matchContent[j]+'" target="_blank" rel="noopener noreferrer"><i class="fa fa-play"></i></a>';
    }

    var target=document.getElementById(game).getElementsByClassName('mu-progress-recent');
    target[0].appendChild(template);
  }
}
loadMatch('kartRider');
loadMatch('hearthStone');
// loadMatch('rainbowSix');
loadMatch('starCraft2');
loadMatchCytus("cytus2","8","8強")
