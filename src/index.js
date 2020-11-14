window.addEventListener('DOMContentLoaded', (event) => {
    draw();
});

function draw() {
    const main = document.getElementById('main');

    shuffle(DAYS);
    DAYS.forEach(({id, msg, img}) => {
        const tile = createTile(id)
        main.appendChild(tile);
    })
}

function createTile(index) {
    const tile = document.createElement('div')
    tile.classList.add('tile-content');
    tile.innerText = index;
    tile.addEventListener('click', () => openTile(index))


    const tileWrapper = document.createElement('div')
    tileWrapper.classList.add('tile-wrapper');
    tileWrapper.id = index;
    tileWrapper.appendChild(tile);

    return tileWrapper;
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function openTile(index) {
    showPopup();

    const item = DAYS.find(el => el.id === index);
    const popupContent = document.getElementById('popup-content');
    popupContent.innerText = item.msg;
}


function createImage({alt, src}) {
    const img = document.createElement('img')
    img.src = src;
    img.alt = alt;

    return img;
}

function shuffle(arr) {
    let i = arr.length;
    while (i > 0) {
        const k = Math.floor(Math.random() * i--);
        swap(arr, i, k);
    }
}

function swap(arr, i, k) {
    const tmp = arr[i];
    arr[i] = arr[k];
    arr[k] = tmp;
}


const DAYS = [
    {
        id: 1,
        msg: '1. Erster',
        img: {alt: 'eins', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 2,
        msg: '2. Zweiter',
        img: {alt: 'zwei', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 3,
        msg: '3. Dritter',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 4,
        msg: '4. vierter',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 5,
        msg: '5. fünfter',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 6,
        msg: '6. sechster',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 7,
        msg: '7',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 8,
        msg: '8',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 9,
        msg: '9',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 10,
        msg: '10',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 11,
        msg: '11',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 12,
        msg: '12',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 13,
        msg: '13',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 14,
        msg: '14',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 15,
        msg: '15',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 16,
        msg: '16',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 17,
        msg: '17',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 18,
        msg: '18',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 19,
        msg: '19',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 20,
        msg: '20',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 21,
        msg: '21',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 22,
        msg: '22',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 23,
        msg: '23',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    }, {
        id: 24,
        msg: '24',
        img: {alt: '', src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}
    },
];