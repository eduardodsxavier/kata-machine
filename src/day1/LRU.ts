type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class LRU<K, V> {
    private length: number;
    private capacity: number;

    private head?: Node<V>;
    private tail?: Node<V>;

    private lookUp: Map<K, Node<V>>;
    private reverseLookUp: Map<Node<V>, K>;



    constructor(capacity: number = 10) {
        this.capacity = capacity;
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookUp = new Map<K, Node<V>>();
        this.reverseLookUp = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookUp.get(key);
        if (!node) {
            this.length++;
            node = { value: value } as Node<V>;
            this.prepend(node)
            this.trimCache();

            this.lookUp.set(key, node);
            this.reverseLookUp.set(node, key);

        } else {
            node.value = value;
            this.detach(node);
            this.prepend(node);
        }
    }

    get(key: K): V | undefined {
        const node = this.lookUp.get(key);
        if (!node) {
            return undefined;
        }

        this.detach(node);
        this.prepend(node);

        return node.value;
    }

    private detach(node: Node<V>) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = undefined;
        node.prev = undefined;
    }

    private prepend(node: Node<V>): void  {
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    private trimCache(): void {
        if (this.length <= this.capacity) {
            return;
        }

        const tail = this.tail as Node<V>; 
        this.detach(this.tail as Node<V>); 

        const key = this.reverseLookUp.get(tail) as K;
        this.lookUp.delete(key);
        this.reverseLookUp.delete(tail);
        this.length--;
    }
}
