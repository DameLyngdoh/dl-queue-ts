"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doublyLinkedList_1 = require("./node_modules/dl-doubly-linked-list-ts/doublyLinkedList");
var dlnode_1 = require("./node_modules/dl-doubly-linked-list-ts/dlnode");
/**
 * Queue data-structure implementation class.
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this._dlList = new doublyLinkedList_1.DoublyLinkedList();
    }
    Object.defineProperty(Queue.prototype, "length", {
        /**
         * Length of the queue.
         */
        get: function () { return this._dlList.length; },
        enumerable: true,
        configurable: true
    });
    /**
     * Pushes an element into the queue.
     * @param data The element to be pushed into the queue.
     */
    Queue.prototype.push = function (data) {
        var newNode = new dlnode_1.DLNode();
        newNode.data = data;
        this._dlList.insertStart(newNode);
    };
    /**
     * Pops the topmost element in the queue.
     * @returns Returns the topmost element.
     * @throws Underflow expception is queue is empty.
     */
    Queue.prototype.pop = function () {
        var node = this._dlList.end;
        if (this.length == 0) {
            throw new Error('Underflow');
        }
        if (node == null) {
            throw new Error('Unknown error.');
        }
        else {
            this._dlList.deleteEnd();
            return node.data;
        }
    };
    /**
     * Retrieves the value at the specified index.
     * @param index The index to retrieve the data. index >= 0.
     * @throws Index out of bounds if index is less than 0 or greater than length of the queue.
     */
    Queue.prototype.peek = function (index) {
        var node = this._dlList.getNode(index);
        if (node == null) {
            throw new Error('Index out of bounds.');
        }
        else {
            return node.data;
        }
    };
    /**
     * Clears or empties the queue.
     */
    Queue.prototype.clear = function () {
        this._dlList.clear();
    };
    /**
     * Returns an array containing the elements in the queue.
     * @returns Returns an array containing the elements of the queue.
     */
    Queue.prototype.toArray = function () {
        var result = new Array();
        var nodes = this._dlList.toArray();
        for (var i = 0; i < nodes.length; i++) {
            result.push(nodes[i].data);
        }
        return result;
    };
    return Queue;
}());
exports.Queue = Queue;
