// ========== Task 1 ==========

const accum = sum();

function sum() {
  let i = 0;
  return function (value) {
    return (i += value);
  };
}

console.log(accum(2));
console.log(accum(4));
console.log(accum(6));

// ========== Task 2 ==========

console.log("Task 2:");

const counter = createCounter();

function createCounter() {
  counter.value = 0;
  counter.stepValue = 1;
  let reset = counter.value;

  function counter() {
    return (counter.value += counter.stepValue);
  }

  // Начальное значение:
  counter.start = (startNum) => {
    counter.value = startNum;
    reset = startNum;
    return counter.value;
  };

  // Шаг счетчика:
  counter.step = (stepNum) => (counter.stepValue = stepNum);

  // Сброс счетчика:
  counter.reset = () => (counter.value = reset);

  return counter;
}

// Проверка работы:

// counter.start(5);
// counter.step(5);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log("reset:");
counter.reset();

console.log(counter());
console.log(counter());
