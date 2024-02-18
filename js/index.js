console.log("hello")
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let output = document.getElementById("output");

        function add() {
            let result = parseFloat( num1.value) +parseFloat(num2.value);
            output.innerHTML ="Output: "+ result;
            console.log(result);
        }

        function subtract() {
            let result = parseFloat(num1.value) - parseFloat(num2.value);
            output.innerHTML ="Output: "+ result;
        }

        function multiply() {
            let result = parseFloat(num1.value) * parseFloat(num2.value);
            output.innerHTML ="Output: "+ result;
        }

        function divide() {
            let result = parseFloat(num1.value) / parseFloat(num2.value);
            output.innerHTML ="Output: "+ result;
        }
