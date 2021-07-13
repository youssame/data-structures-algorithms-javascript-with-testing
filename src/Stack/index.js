//last-in-first-out 
class Stack {
    constructor() {
        this.data = []
        this.count = 0
    }
    push = element => {
        this.data[this.count] = element
        this.count++
    }
    pop = () => {
        if (this.count === 0)
            return undefined
        this.count--
        const result = this.data[this.count]
        delete this.data[this.count]
        return result
    }
    size = () => this.count
    peek = () => this.data[this.count - 1]
}
module.exports = Stack;