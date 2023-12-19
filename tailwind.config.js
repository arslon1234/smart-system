/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",],
    darkMode: "class",
    theme: {
        asideScrollbars: {
            light: "light",
            gray: "gray",
        },
        extend: {
            colors: {
                input: {
                    DEFAULT: '#EEF0F4',
                    error: "#FB0220",
                    active: "#01A1B7",
                    disabled: "#EEF0F4"
                }
            }
        },
    },
    plugins: [],
}

