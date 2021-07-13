// first-in-first-out
class Queue {
    constructor() {
        this.data = []
    }
    enqueue = (element) => {
        this.data.push(element)
    }
    dequeue = () => {
        return this.data.shift()
    }
    front = () => this.size() === 0 ? undefined : this.data[0]
    size = () => this.data.length
    empty = () => this.data.length === 0 
}
module.exports = Queue;