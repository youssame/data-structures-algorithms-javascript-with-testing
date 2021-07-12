const Stack = require('./index');

test('check if count is 0', () => {
  const stack = new Stack()
  expect(stack.count).toEqual(0)
});

test('check if data is empty', () => {
  const stack = new Stack()
  expect(stack.data).toEqual([])
});

test('test the push', () => {
  const stack = new Stack()
  stack.push(20)
  stack.push(30)
  stack.push(50)
  stack.push(60)
  expect(stack.data[2]).toEqual(50);
});

test('test the pop 1/3', () => {
  const stack = new Stack()
  stack.push(20)
  stack.push(30)
  stack.push(50)
  stack.push(60)
  stack.pop()
  expect(stack.count).toEqual(3);
});

test('test the pop 2/3', () => {
    const stack = new Stack()
    stack.push(20)
    stack.push(30)
    stack.push(50)
    stack.push(60)
    const element = stack.pop()
    expect(element).toEqual(60);
});

test('test the pop 3/3', () => {
    const stack = new Stack()
    stack.push(20)
    stack.push(30)
    stack.push(50)
    stack.push(60)
    stack.pop()
    const element = stack.peek()
    expect(element).toEqual(50);
});

test('test the peek', () => {
  const stack = new Stack()
  stack.push(20)
  stack.push(30)
  stack.push(50)
  stack.push(60)
  const element = stack.peek()
  expect(element).toEqual(60);
});