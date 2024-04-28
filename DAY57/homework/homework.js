const colorInput = document.getElementById('color')
const heightInput = document.getElementById('height')
const widthtInput = document.getElementById('width')
const textInput = document.getElementById('text')
const p = document.getElementById('p')
const btn = document.getElementById('btn')
const div = document.getElementById('div')

btn.addEventListener("click", function(event){
    div.style.backgroundColor = colorInput.value
    div.style.height = heightInput.value + 'px'
    div.style.width = widthtInput.value + 'px'
    p.textContent = textInput.value
    event.preventDefault()
})