export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = [head];

    while(queue.length) {
        if (queue[0].left) {
            queue.push(queue[0].left);
        }
        if (queue[0].right) {
            queue.push(queue[0].right);
        }
        if (queue[0].value === needle) {
            return true;
        }
        queue.shift();
    }

    return false;
}
