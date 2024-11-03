# Svelte Actions

Welcome to **Svelte Actions**, a package that includes a variety of Svelte actions to streamline the development of your applications. This package aims to provide reusable and easy-to-implement actions that enhance the interactivity and performance of your components.

## Installation

To install the package, use npm , pnpm or yarn:

```bash
npm install @gzim/svelte-actions

```

## Available Actions

Here is a list of currently available Svelte actions:

- [In View](#in-view)
- [Out of View](#out-of-view)
- [HotKey](#hotkey)

## Suggest or Add an Action

We welcome contributions from the community! If you have an idea for a new action or would like to suggest an enhancement to an existing one, please open an issue with your requirements. Our community will review your suggestion and work towards adding it.

Pull requests are also welcome for new actions! Feel free to submit your code contributions, and we’ll be happy to review and merge them.

### In View

This action allows you to execute a callback when an element enters the viewport.

```svelte
<script>
	import { inView, type InViewParams } from '@gzim/svelte-actions';

	const inViewParams: InViewParams = {
		callback: () => {
			console.log('Element entered the viewport');
		}
	};
</script>

<section>
	<!-- Lot of scrollable content -->
	<p use:inView={inViewParams}>Your element</p>
</section>
```

### Out of View

This action allows you to execute a callback when an element leaves the viewport.

```svelte
<script>
	import { outOfView, type OutOfViewParams } from '@gzim/svelte-actions';

	const outOfViewParams: OutOfViewParams = {
		callback: () => {
			console.log('Element left the viewport');
		}
	};
</script>

<section>
	<p use:outOfView={outOfViewParams}>Your element</p>
	<!-- Lot of scrollable content -->
</section>
```

### HotKey

This action allows you to execute a callback when a key or combination of keys are pressed.

```svelte
<script>
	import { hotkey } from '@gzim/svelte-actions';
</script>

<section
	use:hotkey={{
		callback: () => {
			console.log('Pressed Alt + P');
		},
		alt: true,
		code: 'KeyP'
	}}
>
	<p>Press Alt/Option + P to execute the callback</p>
</section>
```
