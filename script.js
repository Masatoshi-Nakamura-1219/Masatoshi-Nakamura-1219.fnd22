"use strict";
// Please don't delete the 'use strict' line above


function jankenClick(playerjanken) {
  let jankenArray = ['グー','チョキ','パー',];
  let janken = Math.floor( Math.random() * 3);
  let playerArray = ['グー','チョキ','パー'];
  let resultEnd = "";

  if (janken === playerjanken) {
    resultEnd = "【あいこ】";
  } else if(playerjanken === 0 && janken === 1) {
    resultEnd = "【勝ち】";
  }else if(playerjanken === 1 && janken === 2) {
    resultEnd = "【勝ち】";
  }else if(playerjanken === 2 && janken === 0) {
    resultEnd = "【勝ち】";
  }else {
    resultEnd = "【負け】";
  }
  
  let imgjan = document.getElementById("jankenpon1");
  imgjan.setAttribute("src", "jan" + janken + ".png");
  let msgjan = document.getElementById("rejan1");
  msgjan.innerHTML = playerArray[playerjanken] +"を選択   ジャンケンの結果は…";
  let imgjanP = document.getElementById("jankenpon2");
  imgjanP.setAttribute("src", "jan" + playerjanken + ".png");
  let msgjanP = document.getElementById("rejan2");
  msgjanP.innerHTML = "相手の選択 : " + jankenArray[janken];
  let msgjanP2 = document.getElementById("rejan3");
  msgjanP2.innerHTML = resultEnd;
}

