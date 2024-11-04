import type { Action } from 'svelte/action';

type ClickOutsideParams = () => void;

export const clickOutside: Action<HTMLElement, ClickOutsideParams> = (
	node,
	callback: ClickOutsideParams
) => {
	const handleClick = (event: MouseEvent) => {
		if (event.target && node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			callback();
		}
	};

	const destroy = () => {
		document.removeEventListener('click', handleClick, true);
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy
	};
};
