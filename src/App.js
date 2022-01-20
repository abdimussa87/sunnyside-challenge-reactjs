import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import { useMediaQuery } from 'react-responsive'
import { useEffect } from "react";

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)'
  })
  useEffect(() => {
    console.log(isDesktop);
  }, [isDesktop]);
  return (
    <div className="app">
      <Header />
      <Section1
        imgSrc={isDesktop?"/images/desktop/image-transform.jpg":"/images/mobile/image-transform.jpg"}
        title="Transform your brand"
        content="We are a full-service creative agency specializing in helping brands
      grow fast. Engage your clients through compelling visuals that do most
      of the marketing for you."
        buttonColor="yellow"
      />

      <Section1
        imgSrc={isDesktop?"/images/desktop/image-stand-out.jpg":"/images/mobile/image-stand-out.jpg"}
        title="Stand out to the right audience"
        content="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
        "
        buttonColor="pink"
        reverse={true}
      />
      <div className="app__section2Container">
        <Section2
          imgSrc={isDesktop?"/images/desktop/image-graphic-design.jpg":"/images/mobile/image-graphic-design.jpg"}
          title="Graphic Design"
          content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
        "
        />
        <Section2
          imgSrc={isDesktop?"/images/desktop/image-photography.jpg":"/images/mobile/image-photography.jpg"}
          title="Photography"
          content="Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        "
        />
      </div>

      <h6 >CLIENT TESTIMONIALS</h6>
      <div className="app__section3Container">
        <Section3
          imgSrc="/images/profile/image-emily.jpg"
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          employeePosition="Marketing Director"
        />
        <Section3
          imgSrc="/images/profile/image-thomas.jpg"
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          employeePosition="Chief Operating Officer"
        />
        <Section3
          imgSrc="/images/profile/image-jennie.jpg"
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          employeePosition="Business Owner"
        />
      </div>

      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
