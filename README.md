# React + TypeScript + Vite

![image info](./public/start.png)


## install Project Reactify
    npm install
    npm run watch

## how the project was installed

### install React
    $ npm create vite@latest
    √ Project name: ... Reactify
    √ Package name: ... reactify
    √ Select a framework: » React
    √ Select a variant: » TypeScript

### install tailwind
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

    cd Reactify

navigate to tailwind.config.cjs =>

    /** @type {import('tailwindcss').Config} */
    export default {
	    content: [
		    "./src/**/*.{js,jsx,ts,tsx}",
	    ],
	    theme: {
		    fontFamily: {
			    sans: ['"Inter"', 'sans-serif']
		    },
		    extend: {
			    colors: {
				    primary: {
					    700: '#bf0d0d',
				    },
					  secondary: {
					    600: '#1f2a37'
				    },
				},
			},
	    },
	    plugins: [],
    }

  

navigate to index.css => and add

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

  

### install storybook
    npx -p @storybook/cli sb init

### install concurrently
    npm install --save-dev concurrently

adapt script in package.json =>

    "scripts": {
	    "dev": "vite",
	    "build": "tsc && vite build",
	    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
	    "preview": "vite preview",
	    "storybook": "storybook dev -p 6006",
	    "build-storybook": "storybook build",
	    "watch": "concurrently \"npm:dev\" \"npm:storybook\""
    },

### install concurrently
    npm install primereact

