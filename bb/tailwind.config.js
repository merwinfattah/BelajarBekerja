/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        '400': '400px',
        '297': '297px',
        '111': '111px',
        '107': '107px',
        '106': '106px',
        '103': '103px',
        '96': '96px',
        '94': '94px',
        '91': '91px',
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
      c7: '#ED216A',
      c8: '#F2C00C',
      c9: '#DB5400',
      c10: '#0CB884',
      c11: '#1E98B2',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
    },
  },
  plugins: [],
}
