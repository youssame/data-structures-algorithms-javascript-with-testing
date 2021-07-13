// first-in-first-out
class PriorityQueue {
    constructor() {
        this.data = []
    }
    enqueue = (entry) => {
        const [element, priority] = entry
        if (this.empty())
            this.data.push(entry)
        else {
            let added = false
            for (let i = 0; i < this.size(); i++) {
                const [el, pr] = this.data[i]
                if (priority < pr) {
                    this.data.splice(i, 0, entry)
                    added = true
                    break
                }
            }
            if (!added)
                this.data.push(entry)

        }
    }
    dequeue = () => {
        return this.data.shift()
    }
    front = () => this.size() === 0 ? undefined : this.data[0]
    size = () => this.data.length 
    empty = () => this.data.length === 0 
}
module.exports = PriorityQueue;