const tempInput = document.getElementById('tempInput');
const radios = document.getElementsByClassName('radio');

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const newTempType = () => {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked){
      console.log(radios[i].nextElementSibling.innerHTML)
      // printToDom('tempOutput', radios[i].nextElementSibling.innerHTML);
    }
  }
};

newTempType();
console.log(radios);

const determineConverter = () => {
 console.log(tempInput.value);
 console.log(newTempType());
 printToDom('tempOutput', tempInput.value);
};

convertBtn.addEventListener("click", determineConverter);
