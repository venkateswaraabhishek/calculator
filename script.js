function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a + b;
    document.getElementById("result").innerHTML = "Addition is " + c;
   
}
function sub(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let d = a-b;
    document.getElementById("result1").innerHTML = "subtraction is " + d;
}
function mul(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let e = a*b;
    document.getElementById("result2").innerHTML = "multiplication is " + e;
}
function div(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let f = a/b;
    document.getElementById("result3").innerHTML = "division is " + f;
}