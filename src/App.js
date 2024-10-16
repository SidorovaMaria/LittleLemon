import "./App.css";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Highlights } from "./components/Highlights";
import { NavigationBar } from "./components/NavigationBar";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <nav>
        <NavigationBar />
      </nav>
      <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
