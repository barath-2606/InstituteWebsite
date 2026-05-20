import Navbar from "../Navbar.tsx";
import LandingPage from "../LandingPage.tsx";
import { Courses } from "../Courses.tsx";
import { WhyUs } from "../WhyUs.tsx";
import { CTA } from "../CTA.tsx";
import { Footer } from "../Footer.tsx";
import { About } from "../About.tsx";

const Home: React.FC = () => {
  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <LandingPage />

      {/* COURSES */}
      <Courses />

      {/* WHY */}
      <WhyUs />

      {/* CTA */}
      <CTA />

      {/* About us */}
      <About />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
