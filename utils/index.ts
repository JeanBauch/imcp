// export const scrollToElement = (selector: string) => {
// 	const card: HTMLElement | null = document.querySelector(selector);
// 	const mq = window.matchMedia('(max-width: 639px)');

// 	if (card && mq.matches) {
// 		card.scrollIntoView({ block: 'start', behavior: 'smooth' });
// 	}
// };

export const toggleClass = (elementDom: HTMLElement | Element | null, className: string) => {
	if (elementDom?.classList.contains(className)) {
		elementDom.classList.remove(className);
	} else {
		elementDom?.classList.add(className);
	}
};
