function getnum()
{
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;
    var forms = document.getElementById("forms").value;

    var result;
    

    switch (forms)
    {
        case "+":
            result = Number(num1) + Number(num2);
            break;
        case "-":
            result = Number(num1) - Number(num2);
            break;
        case "*":
            result = Number(num1) * Number(num2);
            break;
        case "/":
            result = Number(num1) / Number(num2);
            break;
        case "^":
            result = Number(num1) ** Number(num2);
            break;
    }
    var resultContainer = document.getElementById('resultContainer');
    var resultElement = document.createElement('p');
    resultElement.textContent = 'Result: ' + result;
    resultContainer.innerHTML = '';
    resultContainer.appendChild(resultElement);
}