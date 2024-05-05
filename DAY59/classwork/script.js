const number1 = document.getElementById("num1")
const number2 = document.getElementById("num2")
const operator = document.getElementById("operator")
const btn = document.getElementById("btn")
const p = document.getElementById("p")

btn.addEventListener("click",function(math){
    if(operator.value == '+'){
        let number3 = parseInt(number1.value) + parseInt(number2.value)
        p.textContent = number3
    }
    else if(operator.value == "-"){
        let number3 = parseInt(number1.value) - parseInt(number2.value)
        p.textContent = number3
    }
    else if(operator.value == "*"){
        let number3 = parseInt(number1.value) * parseInt(number2.value)
        p.textContent = number3
    }
    else if(operator.value == "/"){
        let number3 = parseInt(number1.value) / parseInt(number2.value)
        p.textContent = number3
    }
    math.preventDefault()
})