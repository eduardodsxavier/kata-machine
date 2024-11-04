type Node<T> = {
    value: T,
    next?: Node<T>,
    previous?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;

        const node = {value: item} as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.previous = node;
        node.next = this.head; 
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx === this.length) {
            this.append(item);
            return;
        }

        if (idx > this.length) {
            return;
        }

        if (idx === 0) {
            this.append(item);
            return;
        }

        this.length++;

        const node = {value: item} as Node<T>;

        let nodeP = this.head;
        for (let i = 0; i < idx; i++) {
            nodeP = nodeP?.next;
        }

        if (!nodeP) {
            return;
        }

        node.previous = nodeP;
        node.previous.next = node;

        if (nodeP.next) {
            node.next = nodeP.next;
            node.next.previous = node;
        }
    }
    append(item: T): void {
        this.length++;

        const node = {value: item} as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        node.previous = this.tail; 
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let nodeP = this.head;
        let idx = undefined;
        for (let i = 0; i < this.length; i++) {
            if (nodeP?.value === item) {
                idx = i;
                break;
            }
            nodeP = nodeP?.next;
        }  

        if (!nodeP) {
            return undefined;
        }

        this.length--;

        const value = nodeP.value;

        if (!nodeP.previous) {
            if (!nodeP.next) {
                this.head = this.tail = undefined;
                return value;
            }
            this.head = nodeP.next;
            nodeP.next.previous = undefined;
            return value; 
        }

        if (!nodeP.next) {
            nodeP.previous.next = undefined;
            this.tail = nodeP.previous;
            return value;
        }


        nodeP.next.previous = nodeP.previous;
        nodeP.previous.next = nodeP.next;

        return value;
    }
    get(idx: number): T | undefined {
        let nodeP = this.head;
        for (let i = 0; i < idx; i++) {
            nodeP = nodeP?.next;
        }
        return nodeP?.value;

    }
    removeAt(idx: number): T | undefined {

        if (idx > this.length || idx < 0) {
            return undefined;
        }

        let nodeP = this.head;
        for (let i = 0; i < idx; i++) {
            nodeP = nodeP?.next;
        }

        if (!nodeP) {
            return undefined;
        }

        this.length--;

        const value = nodeP.value;

        if (!nodeP.previous) {
            if (!nodeP.next) {
                this.head = this.tail = undefined;
                return value;
            }
            this.head = nodeP.next;
            nodeP.next.previous = undefined;
            return value; 
        }

        if (!nodeP.next) {
            nodeP.previous.next = undefined;
            this.tail = nodeP.previous;
            return value;
        }


        nodeP.next.previous = nodeP.previous;
        nodeP.previous.next = nodeP.next;

        return value;
    }
}
