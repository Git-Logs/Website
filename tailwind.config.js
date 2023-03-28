module.exports = {
    content: [
      "./src/pages/**/**{.js,.ts,.jsx,tsx}",
      "./src/components/**/**{.js,.ts,.jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          blackColor: '#4D287B',
          whiteColor: '#ffffff',
          toxColor: '#9913DA',
          primary: '	#20c997',
          secondary: '#42ba96',
        },
      },
      fontFamily: {
        chewy: ["chewy", "cursive"],
        chew: ["Chewy", "cursive"],
        fredoka: ["Fredoka One"]
      }
    },
    plugins: [],
  };