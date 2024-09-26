let isDegree = false;

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteChar() {
  let currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  let currentValue = document.getElementById('result').value;
  if (currentValue !== '') {
    document.getElementById('result').value += operator;
  }
}

function appendFunction(func) {
  let currentValue = document.getElementById('result').value;
  if (func === 'Math.pow') {
    document.getElementById('result').value = `Math.pow(${currentValue}, 2)`;
  } else if (func === 'Math.sqrt') {
    document.getElementById('result').value = `Math.sqrt(${currentValue})`;
  } else {
    document.getElementById('result').value = `${func}(${currentValue})`;
  }
}

function calculate() {
  try {
    let result = eval(document.getElementById('result').value);
    if (result || result === 0) {
      document.getElementById('result').value = result;
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function calculateFactorial() {
  let currentValue = document.getElementById('result').value;
  let factorial = 1;
  if (currentValue === '' || isNaN(currentValue)) {
    document.getElementById('result').value = 'Error';
  } else {
    for (let i = 1; i <= currentValue; i++) {
      factorial *= i;
    }
    document.getElementById('result').value = factorial;
  }
}

function toggleDegRad() {
  isDegree = !isDegree;
  document.getElementById('toggleScientific').innerText = isDegree ? 'Deg' : 'Rad';
}

function toggleScientific() {
  const standardButtons = document.getElementById('standard-buttons');
  const scientificButtons = document.getElementById('scientific-buttons');

  if (standardButtons.style.display === 'none') {
    standardButtons.style.display = 'grid';
    scientificButtons.style.display = 'none';
  } else {
    standardButtons.style.display = 'none';
    scientificButtons.style.display = 'grid';
  }
}
