export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-primary text-white dark:pintree-bg-gray-900 p-12">
      <div className="text-center text-gray-700">
        <h1 className="mb-2 text-6xl font-bold leading-none sm:text-7xl md:text-8xl dark:text-gray-400">
          404
        </h1>
        <h2 className="mb-3 text-[22px] font-semibold leading-tight dark:text-gray-600">
          Oops! That page can't be found
        </h2>
        <p className="mb-8 text-lg dark:text-gray-600">
          The page you are looking for might have been deleted or moved.
        </p>
        <a
          className="group gap-2 inline-flex items-center justify-center rounded-full py-4 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-600 text-white hover:text-white hover:bg-green-700 active:bg-green-700 active:text-green-100 focus-visible:outline-green-600"
          href="/"
        >
          <span>Go To Home</span>
          <div className="relative right-0 group-hover:translate-x-1 w-5 duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-right"
            >
              <path className="opacity-0 group-hover:opacity-100 duration-200" d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
