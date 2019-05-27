function matchRecord(game){
  var records=[];
  switch (game) {
    case 'kartRider':
      records=[
        "FINAL 2019/05/25 你各位啊：車隊BAN不見 0：2 https://youtu.be/xzxdR_MGmMU",
        "SRU 2019/05/16 ㄅㄆㄇㄈㄉㄊㄋ：韓總一定行 3：7 https://youtu.be/G0tKF6V2JA4",
        "4-1 2019/05/12 你各位啊：ㄅㄆㄇㄈㄉㄊㄋ 7：0 https://youtu.be/nYdwck7gkpk",
        "4-2 2019/05/08 車隊BAN不見：韓總一定行 7：1 https://youtu.be/ezuJw_H_KKg",
        "8-1 2019/05/04 恭喜你贏了：你各位啊 0：7 https://youtu.be/f04aTFZ6xR4",
        "8-2 2019/05/02 ㄅㄆㄇㄈㄉㄊㄋ：我的阿提密斯呢 7：4 *",
        "8-3 2019/05/02 車隊BAN不見：來想個好隊名 7：0 https://youtu.be/l9_Fp06n3SE",
        "8-4 2019/05/03 韓總一定行：樸樓好醜不要蓋 7：5 https://youtu.be/YMrZQvvCcXA",
        "P-1 2019/04/23 你各位啊：隨便啦 7：0 *",
        "P-2 2019/04/25 南部小孩：ㄅㄆㄇㄈㄉㄊㄋ 0：7 *",
        "P-2 2019/04/28 我的阿提密斯呢：城高不換 7：1 https://youtu.be/KpNCNh5JRHk",
        "P-4 2019/04/23 來想個好隊名：台北醫學大學店 7：1 https://youtu.be/jnN2Q-OK38Q",
        "P-5 2019/04/28 天才衝衝衝：韓總一定行 0：7 https://youtu.be/BYfH1gpmzbM",
        "P-6 2019/04/25 譚老大通訊系統：樸樓好醜不要蓋 0：7 https://youtu.be/yxpAwp9X270"
      ];
      break;

    case 'hearthStone':
      records=[
        "FINAL 2019/05/25 半透明立刻顯現出#3429：stopfish#4534 3：0 https://youtu.be/jtYdbwmYzqA",
        "SRU 2019/05/19 Darkswindler#3857：Cup#3337 2：3 *",
        "4-1 2019/05/10 半透明立刻顯現出#3429：Darkswindler#3857 3：2 https://youtu.be/WOxwh7rexhE",
        "4-2 2019/05/11 stopfish#4534：Cup#3337 3：1 https://youtu.be/AwSeVBWo1_w",
        "8-1 2019/05/01 Miracle#41310：半透明立刻顯現出#3429 1：3 https://youtu.be/wgDvuqsUnXc",
        "8-2 2019/05/05 Darkswindler#3857：仆街少年#4942 3：1 *",
        "8-3 2019/05/01 stopfish#4534：youch6165#3863 3：0 *",
        "8-4 2019/05/04 AdairL#3781：Cup#3337 2：3 https://youtu.be/YG2JlOS2ohw",
        "P-1 2019/04/27 Santafrog#3380：半透明立刻顯現出#3429 1：3 *",
        "P-2 2019/04/26 奪命小獅子#3434：Darkswindler#3857 2：3 https://youtu.be/ic0KtBVM8hA",
        "P-3 2019/04/26 MightyJ#3110：仆街少年#4942 0：3 *",
        "P-4 2019/04/25 李小珀#3584：stopfish#4534 2：3 *",
        "P-5 2019/04/24 youch6165#3863：ETWang#11993 3：2 *",
        "P-6 2019/04/27 AdairL#3781：風中動鳴#3740 3：2 *",
        "P-7 2019/04/27 BingHong#41356：Cup#3337 0：3 *"
      ];
      break;

    case 'cytus2-8':
      records=[
        "組別 玩家名稱 晉級 第一首分數 第二首分數 曲目總分",
        "A 麻糬 * 1952257 1997900 3950157",
        "A SunWind * 1925100 1945268 3890536",
        "A RuiCat - 1850162 1916764 3766926",
      ];
      break;

    case 'cytus2-4':
      records=[
        "組別 玩家名稱 晉級 第一首分數 第二首分數 曲目總分",
        "4 麻糬 * 1987500 1933324 3920824",
        "4 SunWind * 1931531 1939001 3870632",
        "4 石頭 - 1664088 1710814 3374902",
        "4 Xixen - 1786256 1776167 3562423"
      ];
      break;

    case 'cytus2-sur':
      records=[
        "組別 玩家名稱 晉級 第一首分數 第二首分數 第三首分數 曲目總分",
        "季殿 Xixen * 1764857 1736330 1756547 5257734",
        "季殿 石頭 - 1592875 1612550 1646771 4852196"
      ];
      break;

    case 'cytus2-champ':
      records=[
        "組別 玩家名稱 晉級 第一首分數 第二首分數 第三首分數 曲目總分",
        "冠亞 麻糬 * 1898886 1890973 1918145 5708004",
        "冠亞 SunWind - 1920720 1870730 1913205 5704655"
      ];
      break;

    case 'rainbowSix':
      records=[
        "FINAL 2019/05/25 科文哲機掃化痰：溫故帕瑪滋心 2：0 https://youtu.be/TP8Wow5kdXs",
        "SRU 2019/05/16 我拿槍了嗎喇：社競電科北 5：4 *",
        "4-1 2019/05/10 我拿槍了嗎喇：科文哲機掃化痰 1：5 *",
        "4-2 2019/05/08 社競電科北：溫故帕瑪滋心 4：5 *"
      ];
      break;

    case 'starCraft2':
      records=[
        "FINAL 2019/05/21 Sheep#41527：帥哥#3797 3：0 https://youtu.be/vPG9Ndec1aU",
        "SRU 2019/05/19 PenutChen#4138：BlackTea#41749 藍方未報到 *",
        "4-1 2019/05/08 Sheep#41527：PenutChen#4138 3：0 *",
        "4-2 2019/05/12 BlackTea#41749：帥哥#3797 0：3 *",
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
  var templateId=["class","name","up","score1","score2","total"];
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

function loadMatchCytusFinal(game,round,roundTitle){
  var i,j;
  var records=matchRecord(game+"-"+round);
  var templateId=["class","name","up","score1","score2","score3","total"];
  var title=document.createElement("h2");
  title.innerHTML=roundTitle;
  document.getElementById(game).getElementsByClassName('mu-progress-recent')[0].appendChild(title);

  for(i=0 ; i<records.length ; i++){
    var matchContent = records[i].split(' ');
    var template = document.getElementById('cytus-final-match-template').content.cloneNode(true);

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
loadMatchCytusFinal("cytus2","champ","冠亞");
loadMatchCytusFinal("cytus2","sur","季殿");
loadMatchCytus("cytus2","4","4強");
loadMatchCytus("cytus2","8","8強");
