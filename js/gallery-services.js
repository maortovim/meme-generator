'use strict'

let gImgs;
let gMeme = {
        selectedImgId: 5,
        txts: [{
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }]
    };

let gKeywords = {
    'happy': 12,
    'funny puk': 1
}

function updateSelectedImgId(imgId) {
    gMeme.selectedImgId = +imgId;
    // console.log(gMeme.selectedImgId);
}



createImages();

function createImages() {
    gImgs = [];
    for (let i = 1; i < 13; i++) {
        gImgs.push(createImage(['happy'], i))
    }
    return gImgs;
}


function createImage(keywords, id) {
    return {
        id: id,
        url: `img/${id}.jpg`,
        keywords: keywords
    }
}


function getImgUrlbyId() {
    var id = gMeme.selectedImgId;
    let img = gImgs.find((img) => {
        return img.id === id
    })
    return img.url;
}



// var gImgs = [{
//     id: 1,
//     url: 'img/popo.jpg',
//     keywords: ['happy']
// }];
// var gMeme = {
//     selectedImgId: 5,
//     txts: [{
//         line: 'I never eat Falafel',
//         size: 20,
//         align: 'left',
//         color: 'red'
//     }]
// } // 
