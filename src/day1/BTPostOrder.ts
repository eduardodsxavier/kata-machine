function search(arr: number[], pointer: BinaryNode<number> | null): void {
    if (!pointer) {
        return;
    }


    search(arr, pointer.left);
    search(arr, pointer.right);
    arr.push(pointer.value)
}


export default function post_order_search(head: BinaryNode<number>): number[] {
    let arr = [] as number[];
    search(arr, head);

    return arr;
}
