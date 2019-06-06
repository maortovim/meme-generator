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
    renderCanvas()

}


function getCanvasWidth() {
    let MARGIN = 20;
    return window.innerWidth - 2 * MARGIN;
}

function renderCanvas() {


    var canvasWidth = 300;
    var canvasHeight = canvasWidth / 4 * 3

    var ctx = canvas.getContext('2d')


    canvas.width = canvasWidth
    canvas.height = canvasHeight
    // debugger
    let memeImgUrl = getImgUrl();

    drawImg(memeImgUrl);

    function drawImg(imgUrl) {
        var img = new Image;
        img.onload = function () {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // debugger
           
        };
        img.src = imgUrl + '';
    }

}

function drawText(txt, x, y) {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'white'
    ctx.font = "35px Arial";
    ctx.fillText(txt, x, y);
    ctx.strokeText(txt, x, y);
}


function onTypeText(txt) {
    // debugger
    drawText(txt, 100, 100);
    // drawText(txt,100,100);
}

function downloadMeme (el) {
    var image = canvas.toDataURL(getImgUrl());
    el.href = image;
  };