import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-3  mt-5 space-x-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-24 w-24">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
