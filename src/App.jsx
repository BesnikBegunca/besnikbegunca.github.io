
import Test from "./Test";
import "./app.scss"
import Profil from "./components/BesnikiProfil/profil";
import Contact from "./components/contact/Contact";

import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Profil />
    </section>
    <section id="Services">
      <Parallax type="services" />
    </section>
    <section>
      <Services />
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio" />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>



  </div>
};

export default App;
