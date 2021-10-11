import getCenter from "geolib/es/getCenter";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const router = useRouter();

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/riccipierre96/ckul14wead4eo18s0n0omupk5"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker latitude={result.lat} longitude={result.long}>
            <LocationMarkerIcon
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer h-10 text-corail"
              aria-label="location-marker"
            />
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              className="inline-flex cursor-pointer z-50"
              // onClick={() => router.push("/results/")}
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              offsetTop={5}
              offsetLeft={15}
            >
              <div>
                <h4>{result.title}</h4>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
