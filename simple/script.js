function calcular(){
    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("res")

if(isNaN(n1)&& isNaN(n2)){
    alert("digite números válidos")
    return;
}

        res.textContent= n1 + n2
        // res.textContent = n1 + n2
}

function media(){
    var n1 =  document.getElementById("nota1").valueAsNumber;
    var n2 =  document.getElementById("nota2").valueAsNumber;
    var n3 =  document.getElementById("nota3").valueAsNumber;
    var res =document.getElementById("resposta");
    res.textContent = ((n1 + n2 + n3) / 3).toFixed(2)

    if(res > 7){
        res.style.color = "green";

    }else{
        res.style.color = "red";
    }
}