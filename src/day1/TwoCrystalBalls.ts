export default function two_crystal_balls(breaks: boolean[]): number {
    let least = 0;
    let i = 0;
    while (!breaks[i]) {
        least = i;
        i += Math.floor(Math.sqrt(breaks.length));
        if (i >= breaks.length) { return -1 }
    } 

    for (let j = least; j <= i; j++) {
        if (breaks[j]) { return j }
    }
    
    return 0
}
