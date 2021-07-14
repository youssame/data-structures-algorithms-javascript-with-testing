class Set {
    constructor() {
        this.data = []
    }
    has = (element) => this.data.indexOf(element) !== -1
    add = (element) => {
        if (this.has(element))
            return false
        this.data.push(element)
        return true
    }
    remove = (element) => {
        if (!this.has(element))
            return false
        const elementIndex = this.data.indexOf(element)
        this.data.splice(elementIndex, 1)
        return true
    }
    values = () => this.data
    size = () => this.data.length
    union = (otherSet) => {
        const newSet = new Set()
        this.data.forEach(item => newSet.add(item))
        otherSet.values().forEach(item => newSet.add(item))
        return newSet;
    }
    intersection = (otherSet) => {
        const intersectionSet = new Set()
        this.data.forEach(item => {
            if (otherSet.has(item))
                intersectionSet.add(item)
        })
        return intersectionSet
    }
    difference = (otherSet) => {
        const differenceSet = new Set()
        this.data.forEach(item => {
            if (!otherSet.has(item))
                differenceSet.add(item)
        })
        return differenceSet
    }
    subset = (otherSet) => {
        return this.data.every(item => otherSet.has(item))
    }
}
module.exports = Set