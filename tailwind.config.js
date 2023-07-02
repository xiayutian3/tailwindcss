/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:false, //模式
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // height:{ //覆盖默认配置,会把这个高度就变成这个，只有了一个配置
    //   "full-screen":"100vh"
    // },
    extend: {}, //扩展会和原有的配置合并
  },
  variants:{ //类似于hover等效果
    extend: {

    },
  },
  plugins: [],
}

