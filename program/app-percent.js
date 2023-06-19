// Este código foi retirado de uma calculadora de IMC solo desenvolvida por mim mesmo e está sendo implementado neste site!
//alert('teste');
//const error = getElementById('erroMsg');
//const resultImc = getElementById('result-imc');

//

const form = document.getElementById('percentageForm');
    const percentageInput = document.getElementById('percentageInput');
    const amountInput = document.getElementById('amountInput');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const percentage = parseFloat(percentageInput.value);
      const amount = parseFloat(amountInput.value);

      if (!isNaN(percentage) && !isNaN(amount)) {
        resultElement.style.color = 'black';
        const result = amount - ((percentage / 100) * amount);
        resultElement.innerHTML = `<b>${percentage}% de R$ ${amount} reais é igual a: ${result.toFixed(2)} reais</b>. <p>Logo, o desconto aplicado será: <b>${amount - result}</b> reais.</p>`;
      } else {
        
        resultElement.textContent = 'Valores inválidos. Por favor, insira apenas números.';
        resultElement.style.color = 'red';
      }
    });