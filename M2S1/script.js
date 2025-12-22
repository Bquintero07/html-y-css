const menuHamburguer = document.querySelector(".burguer-menu")
const navlinks = document.querySelector(".nav-links")
const burgerCheckbox = document.getElementById('burger')

menuHamburguer.addEventListener('click', () => (navlinks.classList.toggle('mobile-menu')))

// Close the mobile menu when any nav link is clicked
const navAnchors = document.querySelectorAll('.nav-links a')
navAnchors.forEach(anchor => {
	anchor.addEventListener('click', () => {
		if (navlinks.classList.contains('mobile-menu')) {
			navlinks.classList.remove('mobile-menu')
			if (burgerCheckbox) burgerCheckbox.checked = false
		}
	})
})