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
            var mediatexto =document.getElementById("resposta");
            var res = (n1 + n2 + n3) / 3;
    if(res >= 7){
        mediatexto.innerHTML = res.toFixed(2)
        mediatexto.style.color = "green"

    }else{
        mediatexto.innerHTML = res.toFixed(2)
        mediatexto.style.color = "red"
    }
}

  function contar(){
    const num = parseInt($("#numeroInput").val());
    // var num =  document.getElementById("numeroInput").valueAsNumber;

    console.log(num)

    if(isNaN(num)){
        $('#result').text("por favor, informe um número válido");
        return;
    }
    var resultadoStr = ""
    if(num <= 10000){
        for(var cont = 1; cont <= num; cont++){ 
            resultadoStr = resultadoStr + cont + "<br>";
        }
        $("#result").html(resultadoStr)
    }else{
        $("#result").text("Vai travar se você digitar este numero");
    }

    }