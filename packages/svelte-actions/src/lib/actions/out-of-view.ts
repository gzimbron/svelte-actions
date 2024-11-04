export interface OutOfViewParams<T extends HTMLElement = HTMLElement> {
	/**
	 * Callback function to be executed when the element exits the viewport.
	 * The function receives the observed element as an argument.
	 */
	callback: (node: T) => void;

	/**
	 * Delay in milliseconds before the callback is executed.
	 * This allows for deferring the execution of the callback after the element
	 * has exited the viewport.
	 *
	 * @default 0
	 */
	delay?: number;

	/**
	 * If set to `true`, the callback will be executed every time the element
	 * exits the viewport, allowing for multiple executions as the element
	 * goes out of view repeatedly. If set to `false`, the callback will only
	 * be executed the first time the element exits the viewport.
	 *
	 * @default false
	 */
	repeat?: boolean;

	/**
	 * Threshold for triggering the callback based on the element's visibility in the viewport.
	 *
	 * - `0`: The callback is triggered as soon as any part of the element starts to exit the viewport.
	 * - `1`: The callback is triggered only when the element is completely outside the viewport.
	 * - Values between `0` and `1` represent the percentage of the element that must be outside the viewport
	 *   for the callback to be executed.
	 *
	 * @default 1
	 */
	threshold?: number;
}

export function outOfView<T extends HTMLElement>(node: T, params: OutOfViewParams<T>) {
	let observer: IntersectionObserver;
	let timeoutId: number | undefined;

	const destroy = () => {
		observer?.disconnect();
		if (timeoutId) clearTimeout(timeoutId);
	};

	const update = (params: OutOfViewParams<T>) => {
		destroy();

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						const executeCallback = () => {
							params.callback(node);
							if (!params.repeat) {
								destroy();
							}
						};

						if (params.delay && params.delay > 0) {
							timeoutId = window.setTimeout(executeCallback, params.delay);
						} else {
							executeCallback();
						}
					}
				});
			},
			{
				threshold: 1 - (params.threshold || 1)
			}
		);

		observer.observe(node);
	};

	update(params);

	return { update, destroy };
}
