'use strict'

const userForm = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const errorMessage = document.querySelector('.error')

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

userForm.addEventListener('submit', e => {
    e.preventDefault()

    if (!validateEmail(emailInput.value)) {
        errorMessage.style.visibility = 'visible'
        emailInput.classList.add('error-icon')
    } else {
        errorMessage.style.visibility = 'hidden'
        emailInput.classList.remove('error-icon')
    }
})
