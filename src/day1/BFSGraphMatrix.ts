export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = Array(graph.length).fill(false);
    const prev = Array(graph.length).fill(-1);
    const queue = [source];

    seen[source] = true;

    while (queue.length) {
        const curr = queue.pop() as number;
        if (curr === needle) {
            break;
        }

        const ways = graph[curr]; 
        for (let i = 0; i < ways.length; i++) {
            if (ways[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            queue.unshift(i);
        }
    }

    if (prev[needle] === -1) {
        return null;
    }

    const out = [];
    let curr = needle;

    while (prev[curr] !== -1) {
        out.unshift(curr);
        curr = prev[curr];
    }

    out.unshift(curr);

    return out;

}
