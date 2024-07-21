
const scriptURL = 'https://script.google.com/macros/s/AKfycbyepcMY_rRmFUfFHxowIWeeXvb-pSa7zj6YiAdku4Os6kAj2-9zqUm9L5gqSpzHSOkytg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})