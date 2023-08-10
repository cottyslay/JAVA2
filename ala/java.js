function sumar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result= num1 + num2; 


    document.getElementById("result").textContent = "Resultado: " + result;
}
function resta() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result= num1 - num2; 

    document.getElementById("result").textContent = "Resultado: " + result;
    
}
function multiplicar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result= num1 * num2; 

    document.getElementById("result").textContent = "Resultado: " + result;
    
}
function dividir() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result= num1 / num2; 

    document.getElementById("result").textContent = "Resultado: " + result;
    
}