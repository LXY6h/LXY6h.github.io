const playbtn = document.getElementById('playbtn');
const container1 = document.querySelector('.container1');

const container = document.querySelector('.container');
playbtn.addEventListener('click', function () {
    container.style.display = 'none';
    container1.style.display = 'block';
});
const bigchoose = document.querySelector('.bigchoose');
const cangying = document.getElementById('cy');
const wenzi = document.getElementById('wenzi');
const spider = document.getElementById('spider');
const zhanglang = document.getElementById('zl');
const container2 = document.querySelector('.container2');
const time = document.getElementById('time');
const score = document.getElementById('score');
let timer;
let seconds = 0;
function startTimer() {
    seconds = 0;
    timer = setInterval(function () {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        time.innerText =
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (secs < 10 ? '0' + secs : secs);
    }, 1000);
}
const imgsrc = {
    cangying: './img/image1.png',
    wenzi: './img/R-C.png',
    spider: './img/R.png',
    zhanglang: './img/a.png',
};
let selectedImage;
bigchoose.addEventListener('click', function (e) {
    container2.style.display = 'block';
    container1.style.display = 'none';
    startTimer();
    if (e.target.id === 'cy') {
        selectedImage = imgsrc.cangying;
    } else if (e.target.id === 'wenzi') {
        selectedImage = imgsrc.wenzi;
    } else if (e.target.id === 'spider') {
        selectedImage = imgsrc.spider;
    } else if (e.target.id === 'zl') {
        selectedImage = imgsrc.zhanglang;
    }
    createRandom();
})
function createRandom() {
    const newdiv = document.createElement('div');
    const body = document.querySelector('body');
    newdiv.classList.add('random');
    const { x, y } = Randomadress();
    newdiv.style.left = x + 'px';
    newdiv.style.top = y + 'px';
    newdiv.innerHTML = `<img src="${selectedImage}"  alt="" style="transform: rotate(${Math.random() * 360}deg)"/>`;
    newdiv.addEventListener('click', function () {
        jiaScore();
        this.classList.add('caught')
        setTimeout(() => this.remove(), 2000)
        adddiv();
    })
    body.appendChild(newdiv);
}
function Randomadress() {
    const width = innerWidth;
    const height = innerHeight;
    const x = Math.random() * width;
    const y = Math.random() * height;
    return { x, y }
}
let scoreNum = 0;
function jiaScore() {
    scoreNum++;
    score.innerHTML = `分数： ${scoreNum}`
    if (scoreNum >= 20) {
        hei=document.querySelector('.hei');
        hei.style.display='block';
    }
}
function adddiv() {
    setTimeout(createRandom, 1000)
    setTimeout(createRandom, 1500)
}