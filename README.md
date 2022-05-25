# Next JS | Styled Components

-   [index.js](pages/index.js) Component example
-   [next.config.js](next.config.js) Next JS configuration

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
```
