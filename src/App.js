function App() {
  return (
    <div className="ml-40">
      <div className="banner hover:bg-slate-400">
        <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
          This is a section of some simple filler text, also known as
          placeholder text.
        </div>

        <a
          href="###"
          className="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm"
        >
          Learn more
        </a>

        <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
          <button
            type="button"
            className="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-48 h-44 hover:h-96 hover:w-96 bg-blue-300 transform duration-200"></div>
      <button className="btn-primary-500 hover:btn-primary-400">点击我</button>
      <ul className="list-img-@">
        <li>你的的南方大米JFK</li>
        <li>你的的南方大米JFK</li>
        <li>你的的南方大米JFK</li>
        <li>你的的南方大米JFK</li>
      </ul>
    </div>
  );
}

export default App;
