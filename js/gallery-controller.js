'use strict'


function init() {
    createImages();
    createMeme();
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
   updateSelectedImgId(img.id);
   window.location.href = 'editor.html';
}

