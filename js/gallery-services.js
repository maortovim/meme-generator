'use strict'

let gImgs;


let gKeywords = {
    'happy': 12,
    'funny puk': 1
}


// createImages();

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
// get imgbyid(id)