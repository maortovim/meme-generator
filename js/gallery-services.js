'use strict'

let gImgs;
let gMeme = {
        selectedImgId: 5,
        txts: [{
            line: 'I never eat Falafel',
            size: 14,
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
    gImgs = [
        (createImage(['happy'], 1)),
        (createImage(['happy'], 2)),
        (createImage(['happy'], 3)),
        (createImage(['happy'], 4)),
        (createImage(['happy'], 5)),
        (createImage(['happy'], 6)),
        (createImage(['happy'], 7)),
        (createImage(['happy'], 8)),
        (createImage(['happy'], 9)),
        (createImage(['happy'], 10)),
        (createImage(['happy'], 11)),
        (createImage(['happy'], 12)),
    ];
    return gImgs;
}


function createImage(keywords, id) {
    return {
        id: id,
        url: `img/${id}.jpg`,
        keywords: keywords
    }
}


function getImgUrl() {
    var id = gMeme.selectedImgId;
    let img = gImgs.find((img) => {
        return img.id === id
    })
    return img.url;
}



