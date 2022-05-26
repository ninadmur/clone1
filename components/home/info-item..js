const InfoItem = () => {
  return (
    <div className="w-full bg-none text-black cursor-pointer hover:border-black border-[1px] ease-in-out duration-300">
      {/* <div className="bg-white group-hover:bg-home-info-icon-bg lg:border-8 border-white w-10 h-10 md:w-20 md:h-20 rounded-full flex justify-center items-center">
        <i className="fa-solid fa-file text-lg sm:text-2xl text-gray-400 group-hover:text-white" />
      </div> */}
      <div>
        <img src="https://www.healthifyme.com/blog/wp-content/uploads/2019/08/Yoga-Weight-Loss-Feature-Image1.jpg" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-2 text-sm sm:text-lg font-semibold xl:text-xl">
          Diagnose your Symptoms
        </h1>
        <p className="text-center mt-6 text-xs sm:text-sm xl:text-base">
          Our application helps you find your possible diseases and natural way
          to cure.
        </p>
      </div>
    </div>
  );
};
export default InfoItem;
