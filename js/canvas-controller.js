'use strict'
// // f: setCanvasSize
//    f: drawImg(gMeme)
// takes gMeme
// draw it according to size 
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function createCanvas() {
    let canvasWidth = getCanvasWidth()

}


function getCanvasWidth() {
    let MARGIN = 20;
    return window.innerWidth - 2 * MARGIN;
}


function onCanavasInit() {

    getCanvasWidth()
    create()

}


function getCanvasWidth() {
    let MARGIN = 20;
    return window.innerWidth - 2 * MARGIN;
}

function create() {

    
    var canvasWidth = 300;
    var canvasHeight = canvasWidth / 4 * 3

    var ctx = canvas.getContext('2d')

    // debugger
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // let memeImgUrl = getImgUrlbyId()

    drawImg('https://www.outsideonline.com/sites/default/files/styles/full-page/public/2019/04/02/mount-everest-climbers-stories_h.jpg?itok=QOk9XQrU');

    ctx.fillStyle = "#FF0000";

    ctx.fillRect(20, 20, 150, 100);

    function drawImg(imgUrl) {
        var img = new Image;
        img.onload = function(){
          ctx.drawImage(img,0,0,canvas.width, canvas.height ); 
        };
        img.src = imgUrl;
    }

}

function drawText(txt,x,y) {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'
    ctx.font = "35px Arial";
    ctx.fillText(txt, x, y);
    ctx.strokeText(txt, x, y);
}


function onTypeText(txt) {
drawText(txt,100,100);
}