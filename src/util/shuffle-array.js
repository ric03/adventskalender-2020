/**
 * Fischer-Yates-Shuffle
 */
export function shuffleArray(arr) {
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
