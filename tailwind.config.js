function withOpacityValue (color) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${color}))`;
		}
		return `rgb(var(${color}) / ${opacityValue})`;
	};
}

module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	safelist: [
		'border-primary-yellow-500',
		'border-primary-yellow-700',
		'hover:bg-primary-yellow-500',
		'text-primary-yellow-500',
		'bg-primary-yellow-500',
		'fill-primary-yellow-50',
		'border-primary-orange-500',
		'border-primary-orange-700',
		'hover:bg-primary-orange-500',
		'hover:bg-primary-orange-50',
		'text-primary-orange-500',
		'bg-primary-orange-500',
		'fill-primary-orange-50',
		'border-primary-bordo-500',
		'border-primary-bordo-700',
		'hover:bg-primary-bordo-500',
		'text-primary-bordo-500',
		'bg-primary-bordo-500',
		'fill-primary-bordo-50',
		'before:bg-primary-bordo-500',
		'group-hover:fill-primary-bordo-700',
		'stroke-primary-bordo-500',
		'border-primary-beige-500',
		'border-primary-beige-700',
		'hover:bg-primary-beige-500',
		'text-primary-beige-500',
		'fill-primary-beige-50',
		'border-secondary-blue-500',
		'border-secondary-blue-700',
		'hover:bg-secondary-blue-500',
		'hover:bg-secondary-blue-50',
		'text-secondary-blue-500',
		'bg-secondary-blue-500',
		'fill-secondary-blue-50',
		'group-hover:fill-secondary-blue-700',
		'before:bg-secondary-blue-500',
		'stroke-secondary-blue-500',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white-glass': 'rgba(225, 255, 255, 0.1)',
			white: withOpacityValue('--color-light'),
			gray: withOpacityValue('--color-dark'),
			black: withOpacityValue('--color-text'),
			background: withOpacityValue('--color-background'),
			'primary-bordo': {
				50: withOpacityValue('--color-primary-50'),
				300: withOpacityValue('--color-primary-300'),
				500: withOpacityValue('--color-primary-500'),
				700: withOpacityValue('--color-primary-700'),
			},
			'primary-orange': {
				50: withOpacityValue('--color-primary-altone-50'),
				300: withOpacityValue('--color-primary-altone-300'),
				500: withOpacityValue('--color-primary-altone-500'),
				700: withOpacityValue('--color-primary-altone-700'),
			},
			'primary-yellow': {
				50: withOpacityValue('--color-primary-alttwo-50'),
				300: withOpacityValue('--color-primary-alttwo-300'),
				500: withOpacityValue('--color-primary-alttwo-500'),
				700: withOpacityValue('--color-primary-alttwo-700'),
			},
			'primary-beige': {
				50: withOpacityValue('--color-primary-altthree-50'),
				300: withOpacityValue('--color-primary-altthree-300'),
				500: withOpacityValue('--color-primary-altthree-500'),
				700: withOpacityValue('--color-primary-altthree-700'),
			},
			'secondary-blue': {
				50: withOpacityValue('--color-secondary-50'),
				300: withOpacityValue('--color-secondary-300'),
				500: withOpacityValue('--color-secondary-500'),
				700: withOpacityValue('--color-secondary-700'),
			},
		},
		extend: {
			spacing: {
				18: '4.5rem',
				30: '7.5rem',
			},
		},
	},
	plugins: [],
};
