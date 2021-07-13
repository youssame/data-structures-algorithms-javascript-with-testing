const PriorityQueue = require('./index');

test('check if count is 0', () => {
  const priorityQueue = new PriorityQueue()
  expect(priorityQueue.size()).toEqual(0)
});

test('check if the entry is added', () => {
  const priorityQueue = new PriorityQueue()
  const entry = ["data", 0]
  priorityQueue.enqueue(entry)
  expect(priorityQueue.front()[0]).toEqual("data")
});

test('check if many entries are added', () => {
  const priorityQueue = new PriorityQueue()
  const entry = ["data", 0]
  const entry2 = ["data2", 1]
  priorityQueue.enqueue(entry)
  priorityQueue.enqueue(entry2)
  expect(priorityQueue.size()).toEqual(2)
});

test('check if many entry is added in the right position 1/2', () => {
  const priorityQueue = new PriorityQueue()
  const entry2 = ["data2", 1]
  const entry3 = ["data3", 3]
  const entry4 = ["data4", 5]
  const entry5 = ["data5", 2]
  const entry = ["data", 0]

  priorityQueue.enqueue(entry)
  priorityQueue.enqueue(entry2)
  priorityQueue.enqueue(entry3)
  priorityQueue.enqueue(entry4)
  priorityQueue.enqueue(entry5)
  expect(priorityQueue.data[2][0]).toEqual("data5")
});

test('check if many entry is added in the right position 2/2', () => {
  const priorityQueue = new PriorityQueue()
  const entry2 = ["data2", 1]
  const entry3 = ["data3", 3]
  const entry4 = ["data4", 5]
  const entry5 = ["data5", 2]
  const entry = ["data", 0]

  priorityQueue.enqueue(entry)
  priorityQueue.enqueue(entry2)
  priorityQueue.enqueue(entry3)
  priorityQueue.enqueue(entry4)
  priorityQueue.enqueue(entry5)
  expect(priorityQueue.data[4][0]).toEqual("data4")
});
