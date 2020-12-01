import {asciiToBinary} from "./util/ascii-to-binary";
import {caesarCipher} from "./util/caesar-cipher";
import {canOpenTile} from "./util/can-open-tile-validator";
import {piCipher} from "./util/pi-cipher";
import {shuffleArray} from "./util/shuffle-array";
import {substitutionCipherWrapper} from "./util/substitution-cipher";

window.DISABLE_DATE_LOCK = false;

window.addEventListener('DOMContentLoaded', () => {
    drawTiles();

    document.getElementById('toggle-date-lock').addEventListener('click', toggleDateLock);
    document.getElementById('popup-close').addEventListener('click', hidePopup);
    document.getElementById('forbidden-close').addEventListener('click', hideForbidden);
});

function toggleDateLock() {
    window.DISABLE_DATE_LOCK = !window.DISABLE_DATE_LOCK
    document.getElementById('toggle-date-lock')
        .innerText = (window.DISABLE_DATE_LOCK ? 'Enable' : 'Disable') + ' Date Lock';
}

function drawTiles() {
    const main = document.getElementById('main');

    shuffleArray(DAYS);
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

function fillPopupWithContent({id, title, msg, textTransform, img}) {
    document.getElementById('popup-title').innerText = `#${id} ${title}`;
    document.getElementById('popup-message').innerText = textTransform ? textTransform(msg) : msg;

    const image = document.getElementById('popup-image');
    image.src = 'img/' + img.src;
    image.alt = img.alt;
}

const showPopup = () => document.getElementById('popup').style.display = 'flex';
const hidePopup = () => document.getElementById('popup').style.display = 'none';
const showForbidden = () => document.getElementById('forbidden').style.display = 'flex';
const hideForbidden = () => document.getElementById('forbidden').style.display = 'none';

const DAYS = [
    {
        id: 1, title: '',
        msg: 'Beinahe hätte es ein Türchen für jeden Ehemaligen geben können. AAA B DDD E F II JJ K M NN SS TT V.',
        img: {alt: 'Team', src: 'team-cartoon.png'}
    }, {
        id: 2, title: '', msg: 'Keep on going.',
        img: {alt: 'Toilet paper countdown', src: 'mick-haupt-S5Lz8y95m1A-unsplash.jpg'}
    }, {
        id: 3, title: '',
        msg: 'Connected everything is. The clues you must find. May the force be with you.',
        textTransform: asciiToBinary,
        img: {alt: ' ', src: ''}
    }, {
        id: 4, title: '', msg: 'Es gibt jetzt zwei Tobias Huber.',
        img: {alt: 'Macbook with coffee mug on table', src: 'chris-montgomery-smgTvepind4-unsplash.jpg'}
    }, {
        id: 5, title: '', msg: `catch(error) { window.open(\`https://www.google.com/search?q=$\{error}\`)}`,
        img: {alt: 'VW Beetle', src: 'giovanni-ribeiro-B1hX9TE7HDY-unsplash.jpg'}
    }, {
        id: 6, title: '', msg: 'Viele Wege führen nach Rom, meiner ist es oft nicht.',
        img: {alt: 'Colosseum', src: 'l-a-l-a-s-z-a-S0hS0HfH_B8-unsplash.jpg'}
    }, {
        id: 7, title: '', msg: 'lftqskgixhnwo', textTransform: caesarCipher,
        img: {alt: 'Salad', src: 'raphael-nogueira-63mHpYEyjCA-unsplash.jpg'}
    }, {
        id: 8, title: '', msg: 'WTF - Wespe Token Factory',
        img: {alt: 'Yoda Oh', src: 'reno-laithienne-aN3PdTgW3tc-unsplash.jpg'}
    }, {
        id: 9, title: '', msg: 'Fast fertig...',
        img: {alt: 'Piggy bank', src: 'damir-spanic-vwaTtIhCjVg-unsplash.jpg'}
    }, {
        id: 10, title: '', msg: 'evybpzcdjmuar', textTransform: piCipher,
        img: {alt: 'Apple pie', src: 'hugo-aitken-PqYvDBwpXpU-unsplash.jpg'}
    }, {
        id: 11, title: '', msg: 'Ein Cookie (* keine Einwilligung erforderlich)',
        img: {alt: 'Delicious Cookie', src: 'amirali-mirhashemian-x6VuEH2npHw-unsplash.jpg'}
    }, {
        id: 12, title: '', msg: 'Today there is just this beautiful image',
        img: {alt: 'abstract image', src: 'pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg'}
    }, {
        id: 13, title: '', msg: 'Did you get your presents yet?',
        img: {alt: 'Present', src: 'annie-spratt-HZuJfZlXVQY-unsplash.jpg'}
    }, {
        id: 14, title: '',
        msg: 'Gratuliere du hast es bis zum Ende geschafft. Auch wenn hier kein Gold gefuellter Topf steht, hoffe ich dennoch, dass es dir Spass gemacht hat.',
        textTransform: substitutionCipherWrapper('lftqskgixhnwoevybpzcdjmuar'),
        img: {alt: '', src: ''}
    }, {
        id: 15, title: '', msg: '',
        img: {alt: 'Comic', src: 'Strip-Plus-qua-coder-la-feature-650-finalenglish.jpg'}
    }, {
        id: 16, title: '', msg: 'Mit Ruhe und Gemutlichkeit',
        img: {alt: 'Snowy tree', src: 'mike-blank-L23AkTe3y20-unsplash.jpg'}
    }, {
        id: 17, title: '', msg: 'Hows your day?',
        img: {alt: 'tropical beach', src: 'nattu-adnan-vvHRdOwqHcg-unsplash.jpg'}
    }, {
        id: 18, title: '', msg: '',
        img: {alt: 'Miniature scene: family with christmas tree', src: 'tyler-delgado-Rb0ZQ8v1siY-unsplash.jpg'}
    }, {
        id: 19, title: '', msg: 'Lets get ready. Only 5 days remaining',
        img: {alt: 'Blue Parrot', src: 'jose-ignacio-garcia-zajaczkowski-ZkBjtrG7aYg-unsplash.jpg'}
    }, {
        id: 20, title: 'Cheers', msg: 'Dont drink and drive. Exception: functional alcoholics',
        img: {alt: 'Lady in trunk', src: 'sule-makaroglu-BTOPcWXBCGg-unsplash.jpg'}
    }, {
        id: 21, title: 'Fly like a eagle', msg: 'Stand up, close your eyes and start running',
        img: {alt: '', src: 'valdemaras-d-Nx2FTJfKX68-unsplash.jpg'}
    }, {
        id: 22, title: '', msg: 'You never know which monster lurks in the dark',
        img: {alt: 'dark forrest', src: 'neil-rosenstech-KG-9TUrAFsg-unsplash.jpg'}
    }, {
        id: 23, title: '', msg: 'One day remaining',
        img: {alt: 'Snowy road with christmas lights', src: 'roberto-nickson-5PQn41LFsQk-unsplash.jpg'}
    }, {
        id: 24, title: 'Merry Christmas', msg: '',
        img: {alt: 'Christmas tree', src: 'annie-spratt-Z9Ds4w141i4-unsplash.jpg'}
    },
];