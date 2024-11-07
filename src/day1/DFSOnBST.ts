function search(pointer: BinaryNode<number> | null, needle: number): boolean {
    if (!pointer) {
        return false;
    }
    if (pointer.value === needle) {
        return true;
    }
    if (pointer.value > needle) {
        return search(pointer.left, needle);
    }
    return search(pointer.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}
