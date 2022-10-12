const form = document.getElementById('form')
const sendEmail = document.getElementById('emailA')

function handleSendEmail(event){
  event.preventDefault()
  const fd = new FormData(this)

  sendEmail.setAttribute(
    'href',
    `mailTo: milly.311002@gmail.com?subject=${'PROVEEDORES CONSTRUCTORA GCG'}&body${'Bienvenidos'}`
    `mailTo=${fd.get('contac_email')}&subject=${fd.get('usuario')}&body=${fd.get('name, nit, adress')}`

    )
    sendEmail.click()
  }

form.addEventListener('submit', handleSendEmail)
