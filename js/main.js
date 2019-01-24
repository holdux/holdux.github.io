// Look for .hamburger
var hamburger = document.querySelector('.hamburger')
// On click
hamburger.addEventListener('click', function () {
  // Toggle class "is-active"
  hamburger.classList.toggle('is-active')
  // Do something else, like open/close menu
})

// Cocoen
document.querySelectorAll('.cocoen').forEach(function (element) {
  new Cocoen(element)
})

// Timeline
const links = document.querySelectorAll('.link')
const allItnes = document.querySelectorAll('.timeline-item')


links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    links.forEach(item => item.classList.remove('is-selected'))
    link.classList.add('is-selected')
    console.log(link)
    switch (link.textContent.toLowerCase()) {
      case 'work':
        controlVisibilityItens('education')
        break
      case 'education':
        controlVisibilityItens('work')
        break
      case 'all':
        controlVisibilityItens('')
        break
      default:
        break
    }
  })
})

function controlVisibilityItens(className) {
  toggleVisibleItens(className)
}

function toggleVisibleItens(className) {
  allItnes.forEach(item => {
    if (item.classList.contains(className)) {
      item.classList.remove('show-itens')
      item.classList.add('hide-itens')
    } else {
      item.classList.remove('hide-itens')
      item.classList.add('show-itens')
    }
  })
}