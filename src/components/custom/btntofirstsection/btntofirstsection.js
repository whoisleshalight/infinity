import "./btntofirstsection.scss"
document.addEventListener("DOMContentLoaded", (event) => {
	if (document.querySelector(".button-go-top")) {
		const goTopBtn = document.querySelector(".button-go-top");
		window.addEventListener('scroll', () => {
			if (window.scrollY > 300) {
				goTopBtn.classList.add('_active');
			} else {
				goTopBtn.classList.remove('_active');
			}
		});
	}
});