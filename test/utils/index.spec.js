import { toggleClass } from '~/utils';

describe('Utils:index:ToggleClass', () => {
	const mockElementoDOM = {
		classList: {
			contains: jest.fn(),
			remove: jest.fn(),
			add: jest.fn(),
		},
	};

	it('should remove the class', () => {
		const className = 'open';
		mockElementoDOM.classList.contains.mockReturnValueOnce(true);
		toggleClass(mockElementoDOM, className);
		expect(mockElementoDOM.classList.remove).toBeCalledWith('open');
	});

	it('should add the class', () => {
		const className = 'open';
		mockElementoDOM.classList.contains.mockReturnValueOnce(false);
		toggleClass(mockElementoDOM, className);
		expect(mockElementoDOM.classList.add).toBeCalledWith('open');
	});
});
