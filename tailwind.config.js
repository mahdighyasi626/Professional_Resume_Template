/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      fontSize: {
        mo: '10px',
      },
      width: {
          a4: "210mm",
        },
        height: {
          a4: "297mm"
        },
      colors: {
        'first-color': '#1F2034',
        'resume-color-first': '#074D42',
        'resume-color-second': '#FFFFFF',
        'resume-color-three': '#105996',
        'resume-color-forth': '#BBD4E3',
        'resume-color-fifth': '#BBD4E380'
      },
    },
  },
  plugins: [],
}
