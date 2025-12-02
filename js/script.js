document.addEventListener('DOMContentLoaded', function () {
  initApp()
})
const initApp = () => {
  const popup = document.getElementById('feedback-popup')
  const okBtn = document.getElementById('popup-ok-btn')
  const clickMe = document.querySelector('#click-me')

  // CF7 success listener
  clickMe.addEventListener('click', function () {
    popup.style.display = 'flex'
  })

  okBtn.addEventListener('click', function () {
    window.location.reload()
  })
}
