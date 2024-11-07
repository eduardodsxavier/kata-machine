function search(arr: number[], pointer: BinaryNode<number> | null): void {
    if (!pointer) {
        return;
    }


    search(arr, pointer.left);
    arr.push(pointer.value)
    search(arr, pointer.right);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    let arr = [] as number[];
    search(arr, head);

    return arr;

}
