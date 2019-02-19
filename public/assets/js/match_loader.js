function matchRecord(game){
  var records=[];
  switch (game) {
    case 'kartRider':
      records=[
        "32-1 2019/02/17 這樣剛好七個字：這樣好像七個字 7：1 *",
        "32-3 2019/02/18 這樣剛好七個字：這樣好像七個字 5：7 https://youtu.be/Ln-n6JiRDZc"
      ];
      break;

    case 'hearthStone':
      records=[
        "32-1 2019/02/17 這樣剛好七個字：這樣好像七個字 7：1 *",
        "32-3 2019/02/18 這樣剛好七個字：這樣好像七個字 5：7 https://youtu.be/Ln-n6JiRDZc"
      ];
      break;

    case 'cytus2-32':
      records=[
        "組別 玩家名稱 晉級 第一首分數 第二首分數 曲目總分",
        "A NEKO#ΦωΦ * 2000000 2000000 4000000",
        "B NEKO#ΦωΦ - 2000000 2000000 4000000",
        "C PAFF - 2000000 2000000 4000000"
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
        "32-1 2019/02/17 這樣剛好七個字：這樣好像七個字 7：1 *",
        "32-3 2019/02/18 這樣剛好七個字：這樣好像七個字 5：7 https://youtu.be/Ln-n6JiRDZc"
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
loadMatch('rainbowSix');
loadMatch('starCraft2');
loadMatchCytus("cytus2","32","32強")
