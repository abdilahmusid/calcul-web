let result = 0;
// let value = 0;
let temp = 0;
let num = 0;
function appendValue(number) 
{
    document.getElementById('result').value += number;
    num += number;

}
var sign; 
function calculator(forms)
{
    sign = forms;
    temp = num;
    num = 0;
    document.getElementById('result').value = '';
}
function clearResult() {
    // num = 0;
    // temp = 0;
    // result = 0;
    document.getElementById('result').value = '';
}
function getResult()
{
    // window.alert(temp);
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
    // document.getElementById('result').value = '';
    document.getElementById('result').value =   Number(result);
    num = 0;
    temp = 0;
    // result = 0;
}