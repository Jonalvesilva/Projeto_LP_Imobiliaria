export default function News() {
  return (
    <>
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col items-center justify-center px-2">
        <div className="w-full flex flex-col items-center text-shadow-black rounded-lg gap-y-3 sm:gap-y-6 lg:gap-y-8">
          <h1 className="text-white text-center text-sm sm:text-3xl lg:text-4xl">
            Assine nossa NewsLetter!
          </h1>
          <p className="text-white text-center text-xs sm:text-lg lg:text-xl">
            Não perca tempo e assine agora a nossa newsletter!
          </p>
          <div className="sm:border border-white flex-col gap-y-2 sm:flex-row flex items-center sm:w-[80%]">
            <input
              className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-2 focus:outline-none bg-transparent placeholder-white"
              placeholder="Email Address"
            />
            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-2 px-6 hover:bg-opacity-75">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
