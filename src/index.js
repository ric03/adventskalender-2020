window.addEventListener('DOMContentLoaded', (event) => {
    draw();
});

function draw() {
    const main = document.getElementById('main');

    shuffle(DAYS);
    DAYS.forEach(item => {
        const tile = createTile(item)
        main.appendChild(tile);
    })
}

function createTile(item) {
    const tile = document.createElement('div');
    tile.classList.add('tile-content');
    tile.innerText = item.id;
    tile.addEventListener('click', () => openTile(item))

    const tileWrapper = document.createElement('div')
    tileWrapper.classList.add('tile-wrapper');
    tileWrapper.appendChild(tile);

    return tileWrapper;
}

function openTile({id, title, msg, img}) {
    showPopup();

    document.getElementById('popup-title').innerText = `${id} ${title}`;
    document.getElementById('popup-message').innerText = msg;
    const image = document.getElementById('popup-image');
    image.src = 'img/' + img.src;
    image.alt = img.alt;
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
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
        id: 1, title: 'Eine erste kleine Überraschung', msg: 'Alle Jahre wieder :D',
        img: {alt: 'Adventskalender', src: 'david-olivier-gascon-e9vrm-J192k-unsplash.jpg'}
    }, {
        id: 2, title: 'Hi Peter', msg: 'Der zweite Streich folgt zugleich',
        img: {alt: '', src: ''}
    }, {
        id: 3, title: '', msg: `catch(error) { window.open(\`https://www.google.com/search?q=$\{error}\`)}`,
        img: {alt: '', src: ''}
    }, {
        id: 4, title: '', msg: 'while(true) neverStop()',
        img: {alt: '', src: ''}
    }, {
        id: 5, title: '', msg: 'Keep on going.',
        img: {alt: '', src: ''}
    }, {
        id: 6, title: '', msg: 'Are you finished yet?',
        img: {alt: '', src: ''}
    }, {
        id: 7, title: '', msg: 'It\'s about time',
        img: {alt: '', src: ''}
    }, {
        id: 8, title: '', msg: 'Mit Ruhe und Gemutlichkeit',
        img: {alt: '', src: ''}
    }, {
        id: 9, title: '', msg: 'Einen Schritt nach dem anderen machen',
        img: {alt: '', src: ''}
    }, {
        id: 10, title: '', msg: 'Holla die Waldfee',
        img: {alt: '', src: ''}
    }, {
        id: 11, title: '', msg: 'WTF - Wespe Token Factory',
        img: {alt: '', src: ''}
    }, {
        id: 12, title: '', msg: 'Never ever stop believing',
        img: {alt: '', src: ''}
    }, {
        id: 13, title: '', msg: 'Dont forget to drink',
        img: {alt: '', src: ''}
    }, {
        id: 14, title: '', msg: 'Dont drink and drive. Exception:functioning alcoholics',
        img: {alt: '', src: ''}
    }, {
        id: 15, title: '', msg: 'Lets get ready. Oh stil 9 days remaining',
        img: {alt: '', src: ''}
    }, {
        id: 16, title: '', msg: 'Did you get your presents yet?',
        img: {alt: '', src: ''}
    }, {
        id: 17, title: '', msg: 'Viele Wege führen zum Ziel, meiner ist es oft nicht. - Emil',
        img: {alt: '', src: ''}
    }, {
        id: 18, title: '', msg: 'Fix your imports',
        img: {alt: '', src: ''}
    }, {
        id: 19, title: '', msg: 'Build failed? But ...',
        img: {alt: '', src: ''}
    }, {
        id: 20, title: '', msg: 'Hm. Are you hungry?',
        img: {alt: '', src: ''}
    }, {
        id: 21, title: '', msg: 'Stand up, close your eyes and start running',
        img: {alt: '', src: ''}
    }, {
        id: 22, title: '', msg: 'You never know what monster lurks around the next corner',
        img: {alt: '', src: ''}
    }, {
        id: 23, title: '', msg: 'One day remaining',
        img: {alt: '', src: ''}
    }, {
        id: 24, title: 'Merry Christmas', msg: '',
        img: {alt: '', src: ''}
    },
];