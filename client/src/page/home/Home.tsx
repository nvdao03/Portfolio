import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Posts from './components/Posts';
import Pricing from './components/Pricing';
import Review from './components/Review/Review';
import Service from './components/Service';
import SideBar from './components/SideBar';
import Works from './components/Works';

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="main max-xl:!ml-0">
        <Intro />
        <About />
        <Service />
        <Experience />
        <Works />
        <Pricing />
        <Review />
        <Posts />
        <Contact />
      </main>
    </>
  );
}
