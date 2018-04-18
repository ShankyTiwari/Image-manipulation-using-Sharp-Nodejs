'use strict';

async function changeExtension() {
    const response = await postData();
    const croppedImage = document.querySelector('#result-image');
    console.log(croppedImage);
    croppedImage.src = '/img/output/' + response.filepath
}

function postData() {
    return fetch('http://localhost:4000/do-change-extension', {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
    })
    .then(response => response.json())
}