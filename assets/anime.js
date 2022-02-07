import anime from 'animejs'

export function localleAnim(locales, show) {
	if (show) {
		anime({
			targets: locales,
			opacity: [0, 1],
			translateX: ['-50%', '0%'],

			easing: 'easeInOutCubic',
			duration: 250,
			delay: anime.stagger(50, { from: 'last' }),
		})
	} else
		anime({
			targets: locales,
			opacity: [1, 0],
			translateX: ['0%', '-50%'],

			easing: 'easeInCubic',
			duration: 150,
			delay: anime.stagger(50, { from: 'last' }),
		})
}
