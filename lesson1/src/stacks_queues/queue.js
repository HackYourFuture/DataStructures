class Queue {

    // todo: add a constructor? and implement the methods
    constructor() {
        this._oldestIndex = 1;
        this._newestIndex = 1;
        this._storage = {};
    }

    enqueue(value) {
        this._storage[this._newestIndex] = value;
        this._newestIndex++;

    }

    dequeue() {
        var oldestIndex = this._oldestIndex,
            newestIndex = this._newestIndex,
            deletedData;

        if (oldestIndex !== newestIndex) {
            deletedData = this._storage[oldestIndex];
            delete this._storage[oldestIndex];
            this._oldestIndex++;

            return deletedData;
        }

    }

    peek() {

    }

    length() {
        return this._newestIndex - this._oldestIndex;
    }

    print() {

    }
}
module.exports = Queue;