import { useState } from 'react';
import logo from '../../../../assets/imgs/logo.svg';
import {
  BrieftCaseIcon,
  BubbleIcon,
  GraducationIcon,
  HomeIcon,
  LayerGroupIcon,
  MenuIcon,
  NoteIcon,
  UserFollowingIcon
} from '../../../../components/Icons/Icons';

export default function SideBar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsVisible((prev) => !prev);
    const sidebar = document.getElementById('sidebar');
    const btnToggle = document.getElementById('toggleBtn');

    if (!isVisible) {
      sidebar?.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-full', '!animate-sideBarInSide');
      btnToggle?.classList.remove('translate-x-[0]', '-translate-y-[0]');
      btnToggle?.classList.add('translate-x-[90px]', '-translate-y-[5px]');
      sidebar?.classList.add('!visible', 'animate-sideBarOutSide');
    } else {
      sidebar?.classList.remove('!visible', 'animate-sideBarOutSide');
      btnToggle?.classList.remove('translate-x-[90px]', '-translate-y-[5px]');
      sidebar?.classList.add('opacity-0', 'pointer-events-none', '-translate-x-full', '!animate-sideBarInSide');
      btnToggle?.classList.add('translate-x-[0]', '-translate-y-[0]');
    }
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`flex flex-col justify-between items-center fixed left-0 top-0 bg-body-color border-r border-solid 
          border-[#0000000d] py-6 px-3 p w-[90px] min-h-[110px] h-full transition-all duration-500 ease-in-out max-xl:invisible z-40
        `}
      >
        <a href="#home" className="navbarLogo">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <div>
            <ul className="flex flex-col">
              <li>
                <a
                  href="/"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <HomeIcon />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <UserFollowingIcon />
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <BrieftCaseIcon />
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <GraducationIcon />
                </a>
              </li>

              <li>
                <a
                  href="#work"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <LayerGroupIcon />
                </a>
              </li>

              <li>
                <a
                  href="#posts"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <NoteIcon />
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="block text-title-color py-4 transition duration-300 hover:text-[#ffd15c]"
                >
                  <BubbleIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="text-[14px] text-[#9B98B3] -rotate-180 writing-mode-[vertical-rl]"
          >
            &copy; 2021 - 2025.
          </span>
        </div>
      </aside>

      <button
        onClick={handleToggleMenu}
        id="toggleBtn"
        className={`
          fixed top-[20px] left-[15px] flex justify-center items-center w-[45px] h-[40px] border border-solid border-[#E8DFEC] cursor-pointer bg-[#F9F7FD] z-30 transition-all duration-300 ease-in-out`}
      >
        <MenuIcon className="pointer-events-none" />
      </button>
    </>
  );
}
