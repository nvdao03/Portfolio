import Intro from './components/Intro';
import SideBar from './components/SideBar';

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="main">
        <Intro />
      </main>
    </>
  );
}
