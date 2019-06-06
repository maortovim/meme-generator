'use strict'

let gImgs;
let gMeme;

let gKeywords = {
    'happy': 12,
    'funny puk': 1
}

function createMeme() {
    gMeme = loadFromStorage(gMeme);
    if (!gMeme || gMeme.length === 0) {
        gMeme = {
            selectedImgId: 5,
            txts: [{
                line: 'I never eat Falafel',
                size: 14,
                align: 'left',
                color: 'red'
            }]
        };
        saveToStorage('gMeme', gMeme);
    }
    return gMeme;
}

function updateSelectedImgId(imgId) {
    gMeme.selectedImgId = +imgId;
    saveMemeChanges();
    // console.log(gMeme.selectedImgId);
}

function createImages() {
    gImgs = loadFromStorage(gImgs);
    if (!gImgs || gImgs.length === 0) {
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
        (createImage(['happy'], 13)),
        (createImage(['happy'], 14)),
        (createImage(['happy'], 15)),
        (createImage(['happy'], 16)),
        (createImage(['happy'], 17)),
        (createImage(['happy'], 18)),
        (createImage(['happy'], 19)),
        (createImage(['happy'], 20)),
        (createImage(['happy'], 21)),
        (createImage(['happy'], 22)),
        (createImage(['happy'], 23)),
        (createImage(['happy'], 24)),
        // (createImage(['happy'], 25)),
    ];
    saveToStorage('gImgs', gImgs);
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

getImgUrl();

function getImgUrl() {
    var img = findImg();
    console.log(img.url);
    return img.url;
}

function findImg() {
    let meme = getMeme(); 
    let imgs = getImgs();
    var id = meme.selectedImgId;
    return imgs.find((img) => {
        return img.id === id;
    })
}

function saveMemeChanges() {
    saveToStorage('gMeme', gMeme);
}

function getImgs() {
    return loadFromStorage('gImgs');
}

function getMeme() {
    return loadFromStorage('gMeme');
}



