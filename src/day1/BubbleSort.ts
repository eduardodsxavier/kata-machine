export default function bubble_sort(arr: number[]): void {
    let last = 0;
    while (arr.length - last > 1) {
        for (let i = 0; i < arr.length - last; i++) {
            if (arr[i] > arr[i + 1]){
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp; 
            }
        }
        last++;
    }
}
