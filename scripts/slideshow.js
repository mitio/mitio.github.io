(function () {
	if (!document.querySelectorAll || ![].forEach) return;

	var slideshows = document.querySelectorAll('.slideshow');
	var _len = slideshows.length;

	for (var i = 0; i < _len; i++) {
		var slideshow     = slideshows[i];
		var images        = slideshow.getElementsByTagName('img');
		var frameDuration = parseInt(slideshow.getAttribute('data-frame-duration'), 10) || 3000;
		var framesCount   = images.length;
		var currentFrame  = 0;

		slideshow.className += ' active';

		setInterval(function () {
			var previousFrame = currentFrame;
			currentFrame = (currentFrame + 1) % framesCount;
			images[currentFrame].style.visibility = 'visible';
			images[previousFrame].style.visibility = 'hidden';
		}, frameDuration);
	}
})();
