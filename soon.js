let sNum = document.querySelector('article.row div.col-6 #s');
let sData = sNum.getAttribute('data-time');
let sBorder = document.querySelector('#second');

let mNum = document.querySelector('article.row div.col-6 #m');
let mData = mNum.getAttribute('data-time');
let mBorder = document.querySelector('#minute');

let hNum = document.querySelector('article.row div.col-6 #h');
let hData = hNum.getAttribute('data-time');
let hBorder = document.querySelector('#hour');

let dNum = document.querySelector('article.row div.col-6 #d');
let dData = dNum.getAttribute('data-time');
let dBorder = document.querySelector('#day');

let ref = 360;

window.onload = () => {
    let spans = document.querySelectorAll('article.row .col-6 span:first-child');
    for (let i = 0; i < spans.length; i++) {
        spans[i].innerHTML = spans[i].getAttribute('data-time');
        // console.log(spans[i].getAttribute('data-time') * 6);
    }
    sBorder.style.background = `conic-gradient(#FF3B30 ${6 * sData}deg, #E1E2E6 0deg)`;
    mBorder.style.background = `conic-gradient(#FF9500 ${6 * mData}deg, #E1E2E6 0deg)`;
    hBorder.style.background = `conic-gradient(#4CD964 ${6 * hData}deg, #E1E2E6 0deg)`;
    dBorder.style.background = `conic-gradient(#34AADC ${6 * dData}deg, #E1E2E6 0deg)`;
}

let interval = setInterval(() => {
    sNum.innerHTML = sData -= 1;
    sBorder.style.background = `conic-gradient(#FF3B30 ${ref = (6 * sData) - 6}deg, #E1E2E6 0deg)`;
    if (sData == 0) {
        ref = 360; 
        sData = 60; // here
        mNum.innerHTML = mData -= 1;
        mBorder.style.background = `conic-gradient(#FF9500 ${ref = (6 * mData) - 6}deg, #E1E2E6 0deg)`;
        if (mData == 0) {
            ref = 360;
            mData = 60; // here
            hNum.innerHTML = hData -= 1;
            hBorder.style.background = `conic-gradient(#4CD964 ${ref = (6 * hData) - 6}deg, #E1E2E6 0deg)`;
            if (hData == 0) {
                ref = 360;
                hData = 60; // here
                dNum.innerHTML = dData -= 1;
                dBorder.style.background = `conic-gradient(#34AADC ${ref = (6 * dData) - 6}deg, #E1E2E6 0deg)`;
                if (dData == 0) {
                    ref = 360;
                    dData, hData, mData, sData = 0;
                    sBorder.style.background = `conic-gradient(#FF3B30 ${ref}deg, #E1E2E6 0deg)`;
                    mBorder.style.background = `conic-gradient(#FF9500 ${ref}deg, #E1E2E6 0deg)`;
                    hBorder.style.background = `conic-gradient(##4CD964 ${ref}deg, #E1E2E6 0deg)`;
                    dBorder.style.background = `conic-gradient(#34AADC ${ref}deg, #E1E2E6 0deg)`;
                    clearInterval(interval);
                }
            }
        }
    }
}, 1000);


let mailModal = document.querySelector('.mailModal');
let infoModal = document.querySelector('.infoModal');

function mail() {
    infoModal.classList.remove('infoActive');
    mailModal.classList.toggle('mailActive');
}
function info() {
    mailModal.classList.remove('mailActive');
    infoModal.classList.toggle('infoActive');
}

// window.document.body.querySelector('.all').onclick = () => {
//     infoModal.classList.remove('infoActive');
//     mailModal.classList.remove('mailActive');
// }