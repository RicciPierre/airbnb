import Image from "next/image";

function LargeCard({ img, title, description, buttonTxt }) {
  return (
    <section className="large-card relative py-20 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-40 left-14">
        <h3 className="text-white text-5xl font-semibold mb-10 w-64">
          {title}
        </h3>
        <p className="text-white break-words w-72 max-w-72 text-md">
          {description}
        </p>
        <button className="text-sm bg-white font-semibold rounded-lg py-4 px-5 mt-14">
          {buttonTxt}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
