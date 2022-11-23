export const Herow = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse lg:py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={'/assets/foto.jpeg'}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Profil Dusun
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Selamat Datang <br className="hidden md:block" />
              Di Website{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Dusun Dondong
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Padukuhan Dondong adalah salah satu padukuhan yang terletak di
              Gunung Kidul, lebih tepatnya di Kelurahan Jetis, Kecamatan
              Saptosari, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Hero = () => {
  return (
    <div className="relative">
      <img
        src={'/assets/foto.jpeg'}
        // src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Selamat datang di Website{' '}
                {/* <br className="hidden md:block" /> */}
                <span className="text-teal-accent-400">Dusun Dondong</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Padukuhan Dondong adalah salah satu padukuhan yang terletak di
                Gunung Kidul, lebih tepatnya di Kelurahan Jetis, Kecamatan
                Saptosari, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
