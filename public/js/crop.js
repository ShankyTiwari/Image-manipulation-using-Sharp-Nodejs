'use strict';

async function doCrop() {
    const height = document.querySelector('#height').value;
    const width = document.querySelector('#width').value;
    const response = await postData({
        height : height,
        width: width
    });
    const croppedImage = document.querySelector('#cropped-image');
    console.log(croppedImage);
    croppedImage.src = '/img/output/' + response.filepath
}

function postData({ height, width }) {
    return fetch('http://localhost:4000/do-crop', {
        body: JSON.stringify({ 
            height : height,
            width: width
        }),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
    })
    .then(response => response.json())
}