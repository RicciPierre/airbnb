import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { useState } from "react";
import InfoCard from "../components/InfoCard";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, nbOfGuests } = router.query;

  const formatStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formatEndDate = format(new Date(endDate), "MMMM dd, yyyy");
  const range = `- ${formatStartDate} to ${formatEndDate} -`;

  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <div className="h-screen">
      <Nav placeholder={`${location} ${range} ${nbOfGuests} guests`} />
      <main className="flex mt-2">
        <section className="search-filters flex-grow pt-8 px-6">
          <button onClick={() => router.push("/")} className="mb-10">
            <ArrowLeftIcon className="h-10 hover:animate-pulse" />
          </button>
          <h1 className="font-bold text-5xl mb-4">{location}</h1>
          <p className="font-medium mb-2 text-sm md:text-base">
            300 + Stays {range} {nbOfGuests} guests
          </p>
          <div className="hidden mb-5 space-x-2 whitespace-nowrap md:inline-flex">
            <button className="filter">Cancelletion Flexibility</button>
            <button className="filter">Type of Place</button>
            <button className="filter">Price</button>
            <button className="filter">Rooms and Beds</button>
            <button onClick={toggle} className="filter">
              More filters
            </button>
          </div>
          <div
            className="ml-16 border-2 rounded-full max-w-xl items-center"
            style={{
              display: showMe ? "block" : "none",
            }}
          >
            <p>🚧 In CONSTRUCTION 🚧</p>
          </div>

          <div
            className="flex flex-col"
            // onClick={() => router.push("/results")}
          >
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
