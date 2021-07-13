const Queue = require('./index');

test('check if count is 0', () => {
  const queue = new Queue()
  expect(queue.size()).toEqual(0)
});

test('check if data is empty', () => {
  const queue = new Queue()
  expect(queue.data).toEqual([])
});

test('test the push', () => {
  const queue = new Queue()
  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(50)
  queue.enqueue(60)
  expect(queue.data[2]).toEqual(50);
});

test('test the pop 1/2', () => {
  const queue = new Queue()
  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(50)
  queue.enqueue(60)
  queue.dequeue()
  expect(queue.size()).toEqual(3)
});

test('test the pop 2/2', () => {
    const queue = new Queue()
    queue.enqueue(20)
    queue.enqueue(30)
    queue.enqueue(50)
    queue.enqueue(60)
    const element = queue.dequeue()
    expect(element).toEqual(20)
});

test('test the front', () => {
  const queue = new Queue()
  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(50)
  queue.enqueue(60)
  const element = queue.front()
  expect(element).toEqual(20)
});
