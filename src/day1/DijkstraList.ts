function hasUnvisited(seen: boolean[], dist: number[]): boolean {
    return seen.some((s, i) => !s && dist[i] < Infinity);
}

function getLowestDist(seen: boolean[], dist: number[]): number {
    let idx = -1;
    let lowestDist = Infinity;
    
    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }


        if (dist[i] < lowestDist) {
            lowestDist = dist[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const seen = new Array(arr.length).fill(false);
    const dist = new Array(arr.length).fill(Infinity);
    const prev = new Array(arr.length).fill(-1);
    dist[source] = 0; 

    while (hasUnvisited(seen, dist)) {
        const curr = getLowestDist(seen, dist); 
        seen[curr] = true;

        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            if (seen[edge.to]) {
                continue;
            }

            const nodeDist = dist[curr] + edge.weight;
            if (dist[edge.to] > nodeDist) {
                dist[edge.to] = nodeDist;
                prev[edge.to] = curr;
            }
        }
    }

    if (prev[sink] === -1) { 
        return [];
    }

    const out: number[] = [];
    let curr = sink;
    
    while (prev[curr] !== -1) { 
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}
