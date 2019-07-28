# Queue Data-Structure for TypeScript

This is a queue data-structure implementation for TypeScript using a doubly linked-list from the package `dl-doubly-linked-list` version 1.0.3 or greater.

## Installation
```sh
npm install dl-queue-ts
```

## API

### Constructor

```typescript
let q : Queue<T> = new Queue();
```
### Properties

|Name|Type|Description|
|-|-|-|
|`length`|`number`|Number of elements in the queue.|

### Methods

|Name|Param|Type|Description|
|-|-|-|-|
|`clear`|none||Empties the queue.|
|`peek`|`index`|`number`|Returns the element stored at the `index` position. Throws exception if `index` is out of bounds.|
|`pop`|none||Pops the top most emlement in the queue.|
|`push`|`element`|`T`|Pushes an element of type `T` (generic) into the queue.|

## Documentation
Please refer to `doc/index.html` for the complete documentation and API reference. The documentation for this project was generated using [Compodoc](https://compodoc.app/).

## Demo
```typescript
let q : Queue<number> = new Queue();

// Pushes elements into the queue
for(let i=0; i<10; i++) {
    q.push(i*3);
}

// Gets the elements in an array
let nums : Array<number|null> = queue.toArray();

// Pops an element from the queue
let n : number = q.pop();

// Peek into the array
n = q.peek(3);

// Throws an exception for out of bounds for index
n = q.peek(33);

// Empties the array
q.clear();
```