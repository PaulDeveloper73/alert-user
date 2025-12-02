document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('feedback-popup')
  const okBtn = document.getElementById('popup-ok-btn')
  popup.style.display = 'flex'

  // CF7 success listener
  document.addEventListener('wpcf7mailsent', function () {
    popup.style.display = 'flex'
  })

  okBtn.addEventListener('click', function () {
    window.location.reload()
  })
})
