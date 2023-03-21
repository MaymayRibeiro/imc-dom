function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc'); //acessar botão do HTML através do id

  buttonCalculateImc.addEventListener('click', handleButtonClick); //Escutador = evento ao clicar no botão (o que fazer e quando fazer)

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick); //tornar mais dinâmico
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var resultSentence = document.querySelector('#result-sentence');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  if(imc < 20)
  {
    resultSentence.textContent = 'Você esta abaixo do peso!';
  } 
  else if(imc >20 && imc <= 25)
  {
    resultSentence.textContent = 'Peso Ideal';
  }
  else if(imc >25 && imc <= 30)
  {
    resultSentence.textContent = 'Sobrepeso';
  }
  else if(imc >30 && imc <= 35)
  {
    resultSentence.textContent =  'Obesidade Moderada';
  }
  else if(imc >35 && imc <= 40)
  {
    resultSentence.textContent = 'Obesidade Severa';
  }
  else if(imc >40 && imc <= 50)
  {
    resultSentence.textContent = 'Obesidade Morbida';
  } 
 
  
  imcResult.textContent = formattedImc;
}

start();
