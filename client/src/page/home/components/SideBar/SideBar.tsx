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
  return (
    <>
      <aside className="flex flex-col justify-between items-center fixed left-0 top-0 bg-body-color border-r border-solid border-[#0000000d] py-6 px-3 p w-[90px] min-h-[110px] h-full z-10">
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
                  href="#blog"
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

      <button className="fixed top-[30px] left-[30px] flex justify-center items-center w-[45px] h-[40px] bg-body-color border border-solid border-[#E8DFEC] cursor-pointer">
        <MenuIcon />
      </button>
    </>
  );
}
