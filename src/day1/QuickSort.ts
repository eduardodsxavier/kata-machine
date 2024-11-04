function recursive(arr: number[], lowest: number, highest: number): void {
    if (highest <= lowest) {
        return;
    }

    let pivo = lowest + Math.floor((highest - lowest) / 2);
    let change = lowest;

    for (let i = lowest; i <= highest; i++) {
        if (arr[i] > arr[pivo] || i === pivo) {
            continue;
        }
        const tmp = arr[change];
        arr[change] = arr[i];
        arr[i] = tmp;
        if (change === pivo) {
            pivo = i;
        }
        change++;

    }

    const tmp = arr[change];
    arr[change] = arr[pivo];
    arr[pivo] = tmp;

    recursive(arr, lowest, change - 1);
    recursive(arr, change + 1, highest);
}

export default function quick_sort(arr: number[]): void {
    recursive(arr, 0, arr.length - 1);
}
