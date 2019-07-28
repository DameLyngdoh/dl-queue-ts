import { DoublyLinkedList } from './node_modules/dl-doubly-linked-list-ts/doublyLinkedList';
import { DLNode } from './node_modules/dl-doubly-linked-list-ts/dlnode';

/**
 * Queue data-structure implementation class.
 */
export class Queue<T> {
    /**
     * Doubly linked-list representing the queue.
     */
    private _dlList : DoublyLinkedList<T>;
    
    /**
     * Length of the queue.
     */
    get length() : number { return this._dlList.length; }

    constructor() {
        this._dlList = new DoublyLinkedList();
    }

    /**
     * Pushes an element into the queue.
     * @param data The element to be pushed into the queue.
     */
    public push( data : T ) : void {
        let newNode : DLNode<T> = new DLNode();
        newNode.data = data;
        this._dlList.insertStart(newNode);
    }

    /**
     * Pops the topmost element in the queue.
     * @returns Returns the topmost element.
     * @throws Underflow expception is queue is empty.
     */
    public pop() : T | null {
        let node : DLNode<T> | null = this._dlList.end;
        if(this.length==0) {
            throw new Error('Underflow');
        }
        if(node==null) {
            throw new Error('Unknown error.');
        }
        else {
            this._dlList.deleteEnd();
            return node.data;
        }
    }

    /**
     * Retrieves the value at the specified index.
     * @param index The index to retrieve the data. index >= 0.
     * @throws Index out of bounds if index is less than 0 or greater than length of the queue.
     */
    public peek( index : number ) : T | null {
        let node : DLNode<T> | null = this._dlList.getNode(index);
        if(node==null) {
            throw new Error('Index out of bounds.');
        }
        else {
            return node.data;
        }
    }

    /**
     * Clears or empties the queue.
     */
    public clear() : void {
        this._dlList.clear();
    }

    /**
     * Returns an array containing the elements in the queue.
     * @returns Returns an array containing the elements of the queue.
     */
    public toArray() : Array<T|null> {
        let result : Array<T|null> = new Array<T|null>();
        let nodes : DLNode<T>[] = this._dlList.toArray();
        for(let i=0; i<nodes.length; i++) {
            result.push(nodes[i].data);
        }
        return result;
    }
}