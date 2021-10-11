import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
import FormHost from "./Form";

function Nav({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nbOfGuests, setNbOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        nbOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <header className="nav sticky w-full border-b-2 top-0 z-50 grid grid-cols-2 p-5 bg-white md:px-10 md:grid-cols-3">
        <div
          onClick={() => router.push("/")}
          className="nav-logo relative hidden md:inline items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        <div className="nav-search flex items-center rounded-full py-2 border-0  bg-white md:shadow-md md:border-2">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 outline-none rounded-full text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Where are you going ?"}
          />
          <SearchIcon className="hidden md:inline h-6  bg-red-500 text-white rounded-full p-1 cursor-pointer md:mx-3" />
        </div>

        <div className="nav-menu flex space-x-3 items-center justify-end text-gray-500">
          <FormHost />
          <GlobeAltIcon className="h-10 p-2 cursor-pointer  hover:rounded-full hover:bg-gray-500 hover:bg-opacity-40" />
          <div className="flex items-center space-x-2 border-4 p-2 rounded-full bg-white">
            <MenuIcon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6  cursor-pointer" />
          </div>
        </div>

        {searchInput && (
          <div className="relative flex flex-col col-span-3 mx-auto mt-5">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="bg-white px-4">
              <div className="flex mt-4 mb-6 pb-2 border-b  items-center">
                <h2 className="text-2xl flex-grow font-semibold">
                  Number of guests
                </h2>
                <UsersIcon className="h-6 mt-1" />
                <input
                  min={1}
                  value={nbOfGuests}
                  onChange={(e) => setNbOfGuests(e.target.value)}
                  type="number"
                  className="w-12 ml-2 pl-2 text-lg outline-corail rounded-full"
                />
              </div>
              <div className="flex pb-4">
                <button onClick={search} className="flex-grow text-corail">
                  Search
                </button>
                <button
                  onClick={resetInput}
                  className="flex-grow text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Nav;
