const tempInput = document.getElementById('tempInput');
const convertBtn = document.getElementById('convertBtn');
const radioC = document.getElementById('radioC');
const radioF = document.getElementById('radioF');

const toCelsius = () => {
  unit = 'C';
  finalTemp = (tempInput.value - 32) * .5556;
  domStringBuilder(finalTemp, unit);
};

const toFahrenheit = () => {
  unit = 'F';
  finalTemp = (tempInput.value * 1.8) + 32;
  domStringBuilder(finalTemp, unit);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (finalTemp, unit) => {
  let domString = [];
  domString += `<h2>${finalTemp} degrees ${unit}</h2>`;

  printToDom('tempOutput', domString);
}

const determineConverter = () => {
  if (radioC.checked) {
    toFahrenheit();
  } else if (radioF.checked) {
    toCelsius();
  }
};

const init = () => {
  convertBtn.addEventListener('click', determineConverter);
};

init();