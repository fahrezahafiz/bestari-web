import { Content } from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.css";
import "./styles/font-icons.css";
import "./styles/et-line.css";
import "./styles/bs-switches.css";
import "./styles/app-landing.css";
import "./styles/custom.css";

export default function Home() {
  return (
    <>
      <div id="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}
