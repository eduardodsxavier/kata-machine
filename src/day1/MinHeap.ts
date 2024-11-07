export default class MinHeap {
    public length: number;
    private arr: number[];



    constructor() {
        this.length = 0;
        this.arr = [];
    }



    private fatherIdx(idx: number): number {
        if (idx % 2 === 0) {
            return Math.floor(idx / 2) - 1;
        } 
        return Math.floor(idx / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    private heapfiUp (idx:number): void {
        if (idx === 0) {
            return; 
        }
        
        const father = this.fatherIdx(idx);

        if (this.arr[idx] >= this.arr[father]) {
            return;
        }

        const tmp = this.arr[idx];
        this.arr[idx] = this.arr[father];
        this.arr[father] = tmp;
        this.heapfiUp(father);
    }


    private heapfiDown (idx:number): void {
        const lidx = this.leftChild(idx);
        const ridx = this.rightChild(idx);

        if (idx >= this.length || lidx >= this.length) {
            return;
        }

        if ((ridx >= this.length || this.arr[lidx] <= this.arr[ridx]) 
             && this.arr[lidx] < this.arr[idx]) {
                const tmp = this.arr[idx];
                this.arr[idx] = this.arr[lidx];
                this.arr[lidx] = tmp;
                this.heapfiDown(lidx);
                return
            }

        if (this.arr[ridx] < this.arr[idx]) {
            const tmp = this.arr[idx];
            this.arr[idx] = this.arr[ridx];
            this.arr[ridx] = tmp;
            this.heapfiDown(ridx);
        }

    }

    insert(value: number): void {
        this.arr[this.length] = value;
        this.heapfiUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        this.length--;
        const value = this.arr[0];
        this.arr[0] = this.arr[this.length];
        this.arr[this.length] = 0;
        if (this.length > 1) {
            this.heapfiDown(0);
        }
        return value;
    }
}
