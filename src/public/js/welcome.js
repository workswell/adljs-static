(function() {

	document.addEventListener('DOMContentLoaded', init);

	var presentation;

	function init() {
		window.presentation = presentation = bespoke.horizontal.from('article', { hash: true });
	}

}());