let DISABLE_DATE_LOCK = false;

function toggleDateLock() {
    DISABLE_DATE_LOCK = !DISABLE_DATE_LOCK
    document.getElementById('toggle-date-lock')
        .innerText = (DISABLE_DATE_LOCK ? 'Enable' : 'Disable') + ' Date Lock';
}

window.addEventListener('DOMContentLoaded', () => {
    draw();
});

function draw() {
    const main = document.getElementById('main');

    shuffle(DAYS);
    DAYS.forEach(item => {
        const tile = createTile(item);
        main.appendChild(tile);
    });
}

function createTile(item) {
    const tile = document.createElement('div');
    tile.classList.add('tile-content');
    tile.innerText = item.id;
    tile.addEventListener('click', () => openTile(item));

    const tileWrapper = document.createElement('div');
    tileWrapper.classList.add('tile-wrapper');
    tileWrapper.appendChild(tile);

    return tileWrapper;
}

function openTile(content) {
    if (canOpenTile(content.id)) {
        fillPopupWithContent(content);
        showPopup();
    } else {
        showForbidden();
    }
}

function canOpenTile(id) {
    if(DISABLE_DATE_LOCK) return true;

    const today = new Date();
    const isDecember = today.getMonth() === 12;
    const isPreviousOrSameDay = id <= today.getDate();

    return isDecember && isPreviousOrSameDay;
}

function fillPopupWithContent({id, title, msg, img}) {
    document.getElementById('popup-title').innerText = `#${id} ${title}`;
    document.getElementById('popup-message').innerText = msg;
    const image = document.getElementById('popup-image');
    image.src = 'img/' + img.src;
    image.alt = img.alt;
}

const showPopup = () => document.getElementById('popup').style.display = 'flex';
const hidePopup = () => document.getElementById('popup').style.display = 'none';
const showForbidden = () => document.getElementById('forbidden').style.display = 'flex';
const hideForbidden = () => document.getElementById('forbidden').style.display = 'none';

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
        img: {alt: 'VW Beetle', src: 'giovanni-ribeiro-B1hX9TE7HDY-unsplash.jpg'}
    }, {
        id: 4, title: '', msg: 'while(true) neverStop()',
        img: {alt: 'Stop sign', src: 'free-to-use-sounds-Vkt3uDeDkdg-unsplash.jpg'}
    }, {
        id: 5, title: '', msg: 'Keep on going.',
        img: {alt: 'Toilet paper countdown', src: 'mick-haupt-S5Lz8y95m1A-unsplash.jpg'}
    }, {
        id: 6, title: 'Doris', msg: 'Einfach laufen, laufen, laufen ...',
        img: {alt: 'Walking Man', src: 'harsh-gupta-nVDB1IGq64s-unsplash.jpg'}

    }, {
        id: 7, title: 'Abstract', msg: 'Today there is just this beautiful image',
        img: {alt: 'abstract image', src: 'pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg'}
    }, {
        id: 8, title: '', msg: 'Mit Ruhe und Gemutlichkeit',
        img: {alt: 'Snowy tree', src: 'mike-blank-L23AkTe3y20-unsplash.jpg'}
    }, {
        id: 9, title: '', msg: 'Einen Schritt nach dem anderen machen',
        img: {alt: '', src: ''}
    }, {
        id: 10, title: '', msg: 'Holla die Waldfee',
        img: {alt: '', src: ''}
    }, {
        id: 11, title: '', msg: 'WTF - Wespe Token Factory',
        img: {alt: 'Yoda Oh', src: 'reno-laithienne-aN3PdTgW3tc-unsplash.jpg'}
    }, {
        id: 12, title: '', msg: 'Never ever stop believing',
        img: {alt: 'Lady driving', src: 'spencer-davis-hi1Iq4x_ldM-unsplash.jpg'}
    }, {
        id: 13, title: '', msg: 'Dont forget to drink',
        img: {alt: 'Beer cheers', src: 'wil-stewart-UErWoQEoMrc-unsplash.jpg'}
    }, {
        id: 14, title: 'Cheers', msg: 'Dont drink and drive. Exception: functional alcoholics',
        img: {alt: 'Lady in trunk', src: 'sule-makaroglu-BTOPcWXBCGg-unsplash.jpg'}
    }, {
        id: 15, title: '', msg: 'Lets get ready. Oh stil 9 days remaining',
        img: {alt: 'Blue Parrot', src: 'jose-ignacio-garcia-zajaczkowski-ZkBjtrG7aYg-unsplash.jpg'}
    }, {
        id: 16, title: '', msg: 'Did you get your presents yet?',
        img: {alt: 'Present', src: 'annie-spratt-HZuJfZlXVQY-unsplash.jpg'}
    }, {
        id: 17, title: 'Emil', msg: 'Viele Wege führen zum Ziel, meiner ist es oft nicht.',
        img: {alt: 'Colosseum', src: 'l-a-l-a-s-z-a-S0hS0HfH_B8-unsplash.jpg'}
    }, {
        id: 18, title: '', msg: 'Hows your day?',
        img: {alt: 'tropical beach', src: 'nattu-adnan-vvHRdOwqHcg-unsplash.jpg'}
    }, {
        id: 19, title: '', msg: 'Build failed? But ...',
        img: {alt: 'Sparkler', src: 'wout-vanacker-l4HBYkURqvE-unsplash.jpg'}
    }, {
        id: 20, title: '', msg: 'Are you hungry?',
        img: {alt: 'Breakfast', src: 'joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg'}
    }, {
        id: 21, title: 'Fly like a eagle', msg: 'Stand up, close your eyes and start running',
        img: {alt: '', src: 'valdemaras-d-Nx2FTJfKX68-unsplash.jpg'}
    }, {
        id: 22, title: 'Boo ', msg: 'You never know which monster lurks in the dark',
        img: {alt: 'dark forrest', src: 'neil-rosenstech-KG-9TUrAFsg-unsplash.jpg'}
    }, {
        id: 23, title: '', msg: 'One day remaining',
        img: {alt: 'Snowy road with christmas lights', src: 'roberto-nickson-5PQn41LFsQk-unsplash.jpg'}
    }, {
        id: 24, title: 'Merry Christmas', msg: '',
        img: {alt: 'Christmas tree', src: 'annie-spratt-Z9Ds4w141i4-unsplash.jpg'}
    },
];