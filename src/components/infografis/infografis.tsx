export const Infografis = () => {
  const data = [
    {
      title: "Jumlah KK",
      desc: "188",
    },
    {
      title: "Jumlah Penduduk",
      desc: "1.000 Jiwa",
    },
    {
      title: "Jumlah Laki-laki",
      desc: "500 Jiwa",
    },
    {
      title: "Jumlah Perempuan",
      desc: "500 Jiwa",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Infografis Dusun Dondong
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            {/* <span className="relative">The</span> */}
          </span>
          Infografis Dusun Dondong
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Berdasarkan beberapa definisi di atas, maka dapat dikatakan bahwa
          demografi adalah studi tentang penduduk yang dilihat dari ukuran
          (jumlah), struktur/komposisi, persebaran ke ruangan serta
          faktor-faktor yang mempengaruhi jumlah, struktur dan persebaran
          penduduk yaitu fertilitas, mortalitas dan migrasi di suatu wilayah
        </p>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="mb-2 font-bold text-md">{item.title}</p>
              <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                {item.desc}
              </h6>
              {/* <p className="text-gray-700">
                It’s something that’s many of the wisest people in history have
                kept in mind.
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
