let btn = document.querySelector('#add-time')

btn.addEventListener('click', cloneField => {

    let fields = document.querySelector('.schedule-item').cloneNode(true)

    let clearFields = fields.querySelectorAll('input')
    clearFields.forEach(field => {

        field.value = ''
    })

    let fieldsItems = document.querySelector('#schedule-items')

    fieldsItems.appendChild(fields)
})