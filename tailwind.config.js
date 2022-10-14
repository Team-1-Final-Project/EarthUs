module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        defaultColor: '#3CC2DF',
        defaultLine: '#d3c8c8',
        defaultText: '#333',
        blueColor: '#3CC2DF',
        grayLineColor: '#969696',
        blackColor: '#333',
        grayColor: '#656565',
        yellowColor: '#EDF3EC',
        modalBackground: 'rgba(11, 19, 30, 0.37)',
        greenColor: '#ADC1A9',
        lightGrayColor: '#EAECEE',
      },
      translate: {
        modal: '-50%',
      },
      gridTemplateColumns: {
        post: 'repeat(13, auto)',
        meeting: 'repeat(8, auto)',
      },
      screens: {
        post: '1200px',
        meeting: '820px',
        comment: '501px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
