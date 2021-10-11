import Head from "next/head";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
const express = require("express");
const app = express();
const port = 1337;
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();
const ConnectionMongoDb = require("../server/db/db.config");
const db = require("../server/models");
const Places = db.places;

export default function Home({ exploreData, cardsData }) {
  app.use(cors());
  app.use(bodyParser.json());

  ConnectionMongoDb();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.post("/send", (req, res) => {
    console.log(req.body);

    const places = new Places({
      img: req.body.img,
      location: req.body.location,
      title: req.body.title,
      description: req.body.descripiton,
      star: req.body.star,
      price: req.body.price,
      long: req.body.long,
      lat: req.body.lat,
    });

    places.save();

    return res.status(200).json({
      data: req.body,
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <main className="max-w-7xl mx-auto">
        <section className="small-card pt-8">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section className="medium-card">
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex p-4 -ml-3 space-x-4 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
          title="Try hosting"
          description="Earn extra income and unclock new opportunities by sharing your space."
          buttonTxt="Learn more"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
