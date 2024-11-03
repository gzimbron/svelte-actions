import type { Action } from 'svelte/action';

interface HotKeyParams {
	/**
	 * Callback function to be executed when the specified hotkey is pressed.
	 */
	callback: () => void;

	/**
	 * If `true`, the Shift key must be held down for the callback to be executed.
	 * @default false
	 */
	shift?: boolean;

	/**
	 * If `true`, the Control key must be held down for the callback to be executed.
	 * @default false
	 */
	ctrl?: boolean;

	/**
	 * If `true`, the Alt key must be held down for the callback to be executed.
	 * @default false
	 */
	alt?: boolean;

	/**
	 * If `true`, the Meta key (Windows key or Command key on Mac) must be held down
	 * for the callback to be executed.
	 * @default false
	 */
	meta?: boolean;

	/**
	 * Specifies the key that must be pressed to trigger the callback.
	 * If the key is a letter, it should be provided in the format 'KeyP' (e.g., 'KeyA' for the 'A' key).
	 * For other keys, you can use their respective key names, such as 'Enter', 'Escape', etc.
	 */
	code?: string;
}

const Keys: Array<keyof HotKeyParams> = ['alt', 'code', 'ctrl', 'meta', 'shift'];

type HotKeyParamsWithoutCB = Exclude<keyof HotKeyParams, 'callback'>;

const KeysToEventMap: Record<HotKeyParamsWithoutCB, keyof KeyboardEvent> = {
	alt: 'altKey',
	meta: 'metaKey',
	ctrl: 'ctrlKey',
	shift: 'shiftKey',
	code: 'code'
};

export const hotkey: Action<HTMLElement, HotKeyParams> = (_, params: HotKeyParams) => {
	let stop: () => void;

	const destroy = () => {
		stop?.();
	};

	const update = (params: HotKeyParams) => {
		destroy();

		function handler(event: KeyboardEvent) {
			const definedKeys = Keys.filter((key) => params[key as keyof HotKeyParams] !== undefined);
			const undefinedKeys = Keys.filter((key) => params[key as keyof HotKeyParams] === undefined);

			function check(key: keyof HotKeyParams) {
				return (
					params[key] === event[KeysToEventMap[key as HotKeyParamsWithoutCB] as keyof KeyboardEvent]
				);
			}

			if (
				definedKeys.every(check) &&
				!undefinedKeys.some((key) => !!event[KeysToEventMap[key as HotKeyParamsWithoutCB]])
			) {
				event.preventDefault();
				params.callback?.();
			}
		}

		const start = () => {
			window.addEventListener('keydown', handler);
		};

		stop = () => {
			window.removeEventListener('keydown', handler);
		};

		start();
	};

	update(params);

	return {
		update,
		destroy
	};
};
