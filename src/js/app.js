// Підключення функціоналу "Чортоги Фрілансера"
import {
	addTouchAttr,
	addLoadedAttr,
	isMobile,
	FLS
} from "@js/common/functions.js"
addLoadedAttr();

if (isMobile.any()) {
	const btnSublist = document.querySelector('.btn-sublist');
	if (btnSublist) {
		btnSublist.addEventListener("click", function (e) {
			btnSublist.nextElementSibling.classList.toggle('_active');
		});
	}
}