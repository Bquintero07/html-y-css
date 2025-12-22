document.addEventListener('DOMContentLoaded', () => {
	const menuHamburguer = document.querySelector(".burguer-menu")
	const navlinks = document.querySelector(".nav-links")
	const burgerCheckbox = document.getElementById('burger')

	if (menuHamburguer && navlinks) {
		menuHamburguer.addEventListener('click', () => {
			navlinks.classList.toggle('mobile-menu')
		})
	}

	// Close the mobile menu when any nav link is clicked
	const navAnchors = document.querySelectorAll('.nav-links a')
	navAnchors.forEach(anchor => {
		anchor.addEventListener('click', () => {
			if (navlinks && navlinks.classList.contains('mobile-menu')) {
				navlinks.classList.remove('mobile-menu')
				if (burgerCheckbox) burgerCheckbox.checked = false
			}
		})
	})

	// Create and show a closable welcome modal using the site's color palette
	function showWelcomeModal() {
		const css = `
		.welcome-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);display:flex;align-items:center;justify-content:center;z-index:9999}
		.welcome-modal{position:relative;background:linear-gradient(180deg,#05fc58 0%,rgba(2,48,51,0.95) 100%);color:#fff;padding:1.25rem 1.25rem;border-radius:12px;max-width:420px;width:90%;box-shadow:0 10px 30px rgba(0,0,0,0.4);text-align:center;font-family:inherit}
		.welcome-modal h2{margin:0 0 0.5rem;font-size:1.25rem}
		.welcome-close{position:absolute;top:8px;right:10px;background:transparent;border:2px solid rgba(255,255,255,0.18);color:#fff;width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:1.2rem;line-height:1;display:flex;align-items:center;justify-content:center}
		.welcome-close:hover{background:rgba(255,255,255,0.06)}
		`;
		const style = document.createElement('style')
		style.setAttribute('data-generated','welcome-modal')
		style.appendChild(document.createTextNode(css))
		document.head.appendChild(style)

		const overlay = document.createElement('div')
		overlay.className = 'welcome-overlay'

		const modal = document.createElement('div')
		modal.className = 'welcome-modal'
		modal.innerHTML = `
			<button class="welcome-close" aria-label="Cerrar">&times;</button>
			<h2>Bienvenido a mi Portafolio web</h2>
			<p>Gracias por visitar mi sitio. Explora mis proyectos y conoce más sobre mí.</p>
		`

		overlay.appendChild(modal)
		document.body.appendChild(overlay)

		const closeBtn = modal.querySelector('.welcome-close')
		function closeWelcome() {
			overlay.remove()
			style.remove()
			document.removeEventListener('keydown', onKey)
		}

		closeBtn.addEventListener('click', closeWelcome)
		overlay.addEventListener('click', (e) => {
			if (e.target === overlay) closeWelcome()
		})

		function onKey(e){ if (e.key === 'Escape') closeWelcome() }
		document.addEventListener('keydown', onKey)
	}

	showWelcomeModal()
})