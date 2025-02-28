import About from './components/About';
import Intro from './components/Intro';
import SideBar from './components/SideBar';

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="main" style={{ height: '10000px' }}>
        <Intro />
        <About />
      </main>
    </>
  );
}
