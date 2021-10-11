import Image from "next/image";
import Nav from "./Nav";

function Banner() {
  return (
    <div className="banner-bg relative h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[1000px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <Nav />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg font-medium md:text-xl">
          Not sure where to go ? Perfect.
        </p>
        <button className="text-lg bg-white text-purple-500 rounded-full px-10 py-4 shadow-md font-bold my-10 hover:shadow-xl active:scale-125 transition duration-150 md:text-xl">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
