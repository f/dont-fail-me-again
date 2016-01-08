# Node.js Error Handler by The Dark Side

Darth Vader says **"DON'T FAIL ME AGAIN"** when you made a mistake in your code.

## Testimonials

> - You are going to use this package. - A Sith
> - I am going to use this package. - A Stormtrooper

```bash
npm install dont-fail-me-again --save-dev
```

## Usage

```js
require('dont-fail-me-again');
```

**And make some mistakes in your code, like**

```js
require('dont-fail-me-again');

a_function_does_not_exists();
```

And your computer will tell you "DON'T FAIL ME AGAIN!" by the sound of **Darth Vader** and put the stack:

```
ReferenceError: a_function_does_not_exists is not defined
    at ...
    at ...
```

May the force be with you.

## License

Galactic Public License
