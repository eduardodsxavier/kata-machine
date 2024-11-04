export default function bs_list(haystack: number[], needle: number): boolean {
    let startP = 0;
    let endP = haystack.length;

    while (startP < endP) {
        const midP = startP + Math.floor((endP - startP) / 2);

        if (haystack[midP] === needle) { return true }

        if (haystack[midP] > needle) { endP = midP }

        if (haystack[midP] < needle) { startP = midP + 1 }
    }

    return false;
}
