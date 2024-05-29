const age = document.getElementById('age')
const permission = document.getElementById('permission')
const btn = document.getElementById('btn')

btn.addEventListener('click', function(event) {
    if (age.value === "18" && permission.value === "no") {
        console.log('you don\'t have permission')
    } else if (age.value === "18" && permission.value === "yes") {
        console.log('you have permission')
    }
    event.preventDefault()
})


//2
