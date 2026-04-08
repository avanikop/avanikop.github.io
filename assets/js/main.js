/* ================================================================
   main.js — minimal JS for Avani Koparkar's personal site
   Currently handles:
     - Smooth active-link highlighting in the nav as you scroll
   Add any additional interactivity below.
   ================================================================ */

(function () {
	'use strict';

	/* Highlight the nav link whose section is currently in view */
	const navLinks = document.querySelectorAll('#header nav a');
	const sections = document.querySelectorAll('main section[id]');

	function onScroll() {
		let currentId = '';

		sections.forEach(function (section) {
			const top = section.getBoundingClientRect().top;
			if (top <= 120) {
				currentId = section.id;
			}
		});

		navLinks.forEach(function (link) {
			link.classList.toggle(
				'active',
				link.getAttribute('href') === '#' + currentId
			);
		});
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll(); /* run once on load */

})();
