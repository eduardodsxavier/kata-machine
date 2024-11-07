function search(arr: number[], pointer: BinaryNode<number> | null): void {
    if (!pointer) {
        return;
    }

    arr.push(pointer.value)

    search(arr, pointer.left);
    search(arr, pointer.right);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    let arr = [] as number[];
    search(arr, head);

    return arr;
}
