import About from './components/About';
import Experience from './components/Experience';
import Intro from './components/Intro';
import Pricing from './components/Pricing';
import Service from './components/Service';
import SideBar from './components/SideBar';
import Works from './components/Works';

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="main" style={{ height: '10000px' }}>
        <Intro />
        <About />
        <Service />
        <Experience />
        <Works />
        <Pricing />
      </main>
    </>
  );
}
