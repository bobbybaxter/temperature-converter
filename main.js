// Defintions
const tempInput = document.getElementById('tempInput');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const radioC = document.getElementById('radioC');
const radioF = document.getElementById('radioF');

// Functions
const toCelsius = () => {
  unit = 'C';
  finalTemp = (tempInput.value - 32) * .5556;
  finalTemp.toFixed(0);
  domStringBuilder(finalTemp, unit);
};

const toFahrenheit = () => {
  unit = 'F';
  finalTemp = (tempInput.value * 1.8) + 32;
  finalTemp.toFixed(0);
  domStringBuilder(finalTemp, unit);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (finalTemp, unit) => {
  let color = '';

  if (unit !== 'F' && finalTemp >= 32) {
    color = 'red';
  } else if (unit !== 'C' && finalTemp >= 90) {
    color = 'red';
  } else if (unit !== 'F' && finalTemp <= 0) {
    color = 'blue';
  } else if (unit !== 'C' && finalTemp <= 32) {
    color = 'blue';
  } else {
    color = 'green';
  }

  let domString = `<h2 class="${color}">${finalTemp} degrees ${unit}</h2>`;

  printToDom('tempOutput', domString);
}

const determineConverter = () => {
  if (radioC.checked) {
    toFahrenheit();
  } else if (radioF.checked) {
    toCelsius();
  }
};

const enterKeydown = (e) => {
  if (e.keyCode === 13) {
    determineConverter();
  }
}

const clear = () => {
  tempInput.value = '';
  radioC.checked = false;
  radioF.checked = false;
  printToDom('tempOutput', '');
}

// Initialization Stack
const init = () => {
  convertBtn.addEventListener('click', determineConverter);
  document.addEventListener('keydown', enterKeydown)
  clearBtn.addEventListener('click', clear);
}

// Call Initializer
init();