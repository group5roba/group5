const colorInput = document.getElementById('color-input')
const textInput = document.getElementById('text-input')
const btn = document.getElementById('btn')
const p = document.getElementById('p')

btn.addEventListener('click',function(event){
    p.textContent = textInput.value
    p.style.color = colorInput.value
    event.preventDefault()
})