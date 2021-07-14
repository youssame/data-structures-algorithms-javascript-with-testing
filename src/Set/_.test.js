const Set = require('./index');

test('check if the set is created', () => {
  const set = new Set()
  expect(set.size()).toEqual(0)
});

test('check if the set add elements', () => {
    const set = new Set()
    set.add(1)
    set.add(2)
    expect(set.size()).toEqual(2)
});

test('check if the set doesn\'t add similar elements', () => {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add(2)
    set.add(1)
    set.add(1)
    set.add(3)
    expect(set.size()).toEqual(3)
});

test('check if the set has an element', () => {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add(3)
    expect(set.has(2)).toEqual(true)
});

test('check if the set hasn\'t an element', () => {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add(3)
    expect(set.has(6)).toEqual(false)
});

test("check if the union set", () => {
    const set1 = new Set()
    set1.add(1)
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(5)
    set2.add(2)
    set2.add(3)
    set2.add(6)

    const expectedSet = new Set()
    expectedSet.add(1)
    expectedSet.add(2)
    expectedSet.add(3)
    expectedSet.add(4)
    expectedSet.add(5)
    expectedSet.add(6)
    expect(set1.union(set2).values()).toEqual(expectedSet.values())
})

test("check if intersection set", () => {
    const set1 = new Set()
    set1.add(1)
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(5)
    set2.add(2)
    set2.add(3)
    set2.add(6)

    const expectedSet = new Set()
    expectedSet.add(2)
    expectedSet.add(3)
    
    expect(set1.intersection(set2).values()).toEqual(expectedSet.values())
})

test("check if difference set", () => {
    const set1 = new Set()
    set1.add(1)
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(5)
    set2.add(2)
    set2.add(3)
    set2.add(6)

    const expectedSet = new Set()
    expectedSet.add(1)
    expectedSet.add(4)
    
    expect(set1.difference(set2).values()).toEqual(expectedSet.values())
})

test("check if subset set", () => {
    const set1 = new Set()
    set1.add(1)
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(0)
    set2.add(1)
    set2.add(2)
    set2.add(3)
    set2.add(4)
    set2.add(5)
    set2.add(6)
    set2.add(7)
    
    expect(set1.subset(set2)).toEqual(true)
})