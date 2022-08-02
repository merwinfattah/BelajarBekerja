/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '297': '297px',
        '111': '111px',
        '103': '103px',
        '89': '89px',
        '78': '78px',
      },
      height: {
        '303': '303px',
        '85': '85px',
        '3.03': '3.03px',
      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      padding: {
        '9px': '9px',
        '7px': '7px',
      }
    },
    colors: {
      c1: '#218FED',
      c2: '#FFFFFF',
      c3: '#F2F2F2',
      c4: '#4F4F4F',
      c5: '#C4C4C4',
      c6: '#828282',
    },
    borderRadius: {
      'std': '10px',
      'card': '20px',
    },
    borderWidth: {
      '1': '1px',
    },
  },
  plugins: [],
}
