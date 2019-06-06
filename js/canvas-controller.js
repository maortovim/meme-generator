// // f: setCanvasSize
//    f: drawImg(gMeme)
// takes gMeme
// draw it according to size 
'use strict'

function onCanavasInit() {

    getCanvasWidth()
    create()

}


function getCanvasWidth() {
    let MARGIN = 20;
    return window.innerWidth - 2 * MARGIN;
}

function create() {

    var canvas = document.querySelector('#canvas')
    var canvasWidth = 300;
    var canvasHeight = canvasWidth / 4 * 3

    var ctx = canvas.getContext('2d')

    debugger
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    let memeImgUrl = getImgUrlbyId()

    const image = new Image(canvasWidth, canvasHeight);
    image.src = memeImgUrl
    image.onload = ((image) => {
        ctx.drawImage(image, 0, 0);
    })




    function drawImG() {





    }




    ctx.fillStyle = "#FF0000";

    ctx.fillRect(20, 20, 150, 100);


}