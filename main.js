function getnum()
{
    var num1 = document.getElementById("Number1").value;
    var num2 = document.getElementById("Number2").value;

    var result;
    result = Number(num1) + Number(num2);

    window.alert("Result: " + result);
}