const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const ageInput = document.getElementById('age')
const btn = document.getElementById('btn')
const pName = document.getElementById('pName')
const pEmail = document.getElementById('pEmail')
const pAge = document.getElementById('pAge')
const myName = document.getElementById('myName')
const myEmail = document.getElementById('myEmail')
const myAge = document.getElementById('myAge')


const info = {
    name:"",
    email:"",
    age:"",
    myInfo:{name:"roba", email:"robaamob@gmail.com", age:14}
}
btn.addEventListener('click',function(event){
    info.name = nameInput.value
    info.email = emailInput.value
    info.age = ageInput.value
    pName.textContent = info.name
    pEmail.textContent = info.email
    pAge.textContent = info.age
    myName.textContent = info.myInfo.name
    myEmail.textContent = info.myInfo.email
    myAge.textContent = info.myInfo.age 
    event.preventDefault()
})
console.log(info.name)