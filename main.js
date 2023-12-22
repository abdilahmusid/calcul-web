let result = 0;
// let value = 0;
let temp = 0;
// let temp2;
let num = 0;
let chyata = 0;
function appendValue(number) 
{
    document.getElementById('result').value += number;
    num += number;
}
var sign; 
function calculator(forms)
{
    if (temp != 0)
    {
        getResult2();
        num = result;
    }
    if(chyata != 0)
    {
        temp = chyata;
    }
    else
    {
        temp = num;
    }
    sign = forms;
    num = '';
    document.getElementById('result').value = '';
}
function clearResult() {
    num = 0;
    temp = 0;
    result = 0;
    chyata = 0;
    document.getElementById('result').value = '';
}
function getResult()
{
    document.getElementById('result').value = '';
    // window.alert(temp);
    // result = temp2;
    switch (sign)
    {
        case "+":
            result = Number(temp) + Number(num);
            break;
        case "-":
            result = Number(temp) - Number(num);
            break;
        case "*":
            result = Number(temp) * Number(num);
            break;
        case "/":
            result = Number(temp) / Number(num);
            break;
        case "^":
            result = Number(temp) ** Number(num);
            break;
    }
    document.getElementById('result').value =   Number(result);
    chyata = result;
    num = 0;
    temp = 0;
    result = 0;
}
function getResult2()
{
    document.getElementById('result').value = '';
    // window.alert(temp);
    // result = temp2;
    switch (sign)
    {
        case "+":
            result = Number(temp) + Number(num);
            break;
        case "-":
            result = Number(temp) - Number(num);
            break;
        case "*":
            result = Number(temp) * Number(num);
            break;
        case "/":
            result = Number(temp) / Number(num);
            break;
        case "^":
            result = Number(temp) ** Number(num);
            break;
    }
    temp = 0;
}