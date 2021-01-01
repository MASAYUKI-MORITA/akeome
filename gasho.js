// 「あけましておめでとう」をレインボーカラーにする
var akeomeArray = [];
var akeomeElem = document.getElementById("akeome");
var akeome = akeomeElem.textContent;
for(var i = 0; i < akeome.length; i++){
    akeomeArray[i] = akeome.charAt(i);
}

var colors1 = ["#DE6641", "#F5B090" , "#E8AC51", "#FCD7A1", "#F2E55C", "#FFF9B1", "#39A869", "#A5D4AD", "#4784BF", "#A3BCE2", "#5D5099", "#A59ACA", "#A55B9A", "#CFA7CD"];

var flashText = [];
var result = "";
var timer = 0;

flash();
setInterval(flash, 500);

// 「あけましておめでとう」を画面中央に配置
var displaySize = GetDisplaySize();
var akeomeSize = displaySize.width / 16;
akeomeElem.style.fontSize = akeomeSize + "px";
akeomeElem.style.left = (displaySize.width - akeomeSize * akeome.length) / 2 + "px";
akeomeElem.style.top = (displaySize.height - akeomeSize) / 2 + "px";

// 以下、関数
function flash(){
    result = "";
    for(var i = 0; i < akeomeArray.length; i++){
        flashText[i] = '<span style="color: ' + colors1[(i + timer) % colors1.length] + ';">' + akeomeArray[i] + "</span>";
        result += flashText[i];
    }
    akeomeElem.innerHTML = result;
    timer++;
}

function GetDisplaySize(){
    this.width = window.screen.width;
    this.height = window.screen.height;

    return this;
}
