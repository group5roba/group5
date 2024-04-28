// const roba = {
//     name:'roba',
//     email:"robaamob@gmail.com",
//     age:14,
//     work: {job:"რამის ლიდერი at Goal Oriented Academy", money: "150 ლარი", workTime: "almost every day"}
// }
// console.log(roba,roba.work)

// roba.work.money = "more work equals more money"
// console.log(roba.work.money)

const colorInput = document.getElementById('color')
const heightInput = document.getElementById('height')
const widthtInput = document.getElementById('width')
const btn = document.getElementById('btn')
const div = document.getElementById('div')

btn.addEventListener("click", function(event){
    div.style.backgroundColor = colorInput.value
    div.style.height = heightInput.value + 'px'
    div.style.width = widthtInput.value + 'px'
    event.preventDefault()
})
