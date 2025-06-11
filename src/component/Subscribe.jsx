function Subscribe() {
  return (
    <>
      <div className="bg-[#E7F9FD] sm:rounded-[60px] pt-20 pb-26 md:pb-20 px-5 sm:mx-5 lg:mx-[80px]">
        <p className="font-semibold text-5xl text-center">
          Deliciousness to your inbox
        </p>
        <p className="text-center mt-6 mb-16">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>

        <div className="flex justify-center">
          <div className="relative">
            <button className="absolute top-23 right-23 sm:top-2.5 sm:right-2 text-white text-sm bg-[#000000] rounded-2xl cursor-pointer w-40 h-15 ">
              Subscribe
            </button>
            <input
              className="bg-white ps-8 pe-8 sm:pe-48 py-4 w-[330px]  sm:w-[480px] h-20 rounded-3xl text-sm"
              type="text"
              placeholder="Your email address..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
