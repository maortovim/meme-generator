// // f: setCanvasSize
//    f: drawImg(gMeme)
// takes gMeme
// draw it according to size 


function init() {
    renderImgs();
}

function renderImgs() {
    let imgs = createImages();
    var strHTML = '';
    imgs.forEach(img => {
        strHTML += `<img class="meme-img" id="${img.id}" onclick="onChooseImg(this)" src="img/${img.id}.jpg" alt=${img.keywords}></img>`;
    });
document.querySelector('.img-gallery').innerHTML = strHTML;
}

function onChooseImg(img) {
    console.log(img);
    console.log(img.alt);
    console.log(img.id);
}



function drawImg() {
    // const img = document.querySelector('img');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
}

// function downloadMeme (el) {
//     var image = canvas.toDataURL("image/png;base64");
//     el.href = image;
//   };

