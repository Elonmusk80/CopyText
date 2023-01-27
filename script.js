let $ = document
let btnCopy = $.querySelector('.btnCopy')
let inputElem = $.querySelector('.text')

btnCopy.addEventListener('click',()=> {
    navigator.clipboard.writeText(inputElem.value)
    btnCopy.innerHTML = 'Copy'
    if(btnCopy.innerHTML === 'Copy') {
        setTimeout(function() {
            btnCopy.innerHTML = 'Click'
        },2000)
    }
})