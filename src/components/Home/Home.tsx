import Navbar from "../Navbar.tsx";
import LandingPage from "../LandingPage.tsx";
import { Courses } from "../Courses.tsx";
import { WhyUs } from "../WhyUs.tsx";
import { CTA } from "../CTA.tsx";
import { Footer } from "../Footer.tsx";

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

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
