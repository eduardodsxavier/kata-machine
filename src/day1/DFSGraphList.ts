function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;
    path.push(curr)

    if (curr === needle) {
        return true;
    }

    const ways = graph[curr];

    for (let i = 0; i < ways.length; i++) {
        if (walk(graph, ways[i].to, needle, seen, path)) {
            return true;
        }
    }
    path.pop();
    return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen = Array(graph.length).fill(false);

    const path = [] as number[];

    walk(graph, source, needle, seen, path);

    if (path.length <= 1) {
        return null;
    }

    return path;

}
