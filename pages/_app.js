import "tailwindcss/tailwind.css";
import "../styles/button.css";
import "../styles/label.css";
import "../styles/input.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/dist/client/router";

const progress = new ProgressBar({
  size: 3,
  color: "#FD5B61",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
