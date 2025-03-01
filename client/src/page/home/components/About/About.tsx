import avatar from '../../../../assets/imgs/avatar/avatar-sub.jpg';
import {
  BadgeIcon,
  CupIcon,
  FireIcon,
  PeopleIcon
} from '../../../../components/Icons/Icons';

export default function About() {
  return (
    <section className="custom-container custom-section" id="about">
      <div>
        <h2 className="custom-section-title">About Me</h2>

        <div className="grid gap-x-[19px] grid-cols-[3fr,8fr] max-md:grid-cols-1">
          <img
            src={avatar}
            alt="Van Dao"
            className="w-[150px] h-[150px] bg-center rounded-[50%] max-md:my-0 max-md:mx-auto"
          />

          <div className="grid-cols-[repeat(2,1fr)] gap-x-[30px] relative p-[19px] grid bg-[#fff] rounded-[20px] shadow-md max-md:mt-[30px] max-sm:flex max-sm:flex-wrap max-sm:py-[20px]">
            <div>
              <p className="mb-[20px] leading-6 max-md:text-[14px] max-sm:mb-[15px]">
                I am a student at Hanoi University of Natural Resources and
                Environment. Currently I am studying and working on Web Front
                End development. My long term goal is to become a Full Stack Web
                developer
              </p>
              <a href="#!" className="custom-btn-primary max-sm:hidden">
                Download CV
              </a>
            </div>

            <div className="grid gap-y-[13px] max-sm:flex-1">
              {/* development */}
              <div>
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="font-medium max-md:text-[15px]">
                    Development
                  </h3>
                  <span className="leading-3 max-md:text-[14px]">90%</span>
                </div>

                <div className="bg-[#f1f1f1]">
                  <div className="h-[7px] rounded-[50px] block w-[90%] bg-[#FFD15C]"></div>
                </div>
              </div>

              {/* uiDesign */}
              <div>
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="font-medium max-md:text-[15px]">
                    UI/UX design
                  </h3>
                  <span className="leading-3 max-md:text-[14px]">80%</span>
                </div>

                <div className="bg-[#f1f1f1]">
                  <div className="h-[7px] rounded-[50px] block w-[80%] bg-[#FF4C60]"></div>
                </div>
              </div>

              {/* photography */}
              <div>
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="font-medium max-md:text-[15px]">
                    Photography
                  </h3>
                  <span className="leading-3 max-md:text-[14px]">60%</span>
                </div>

                <div className="bg-[#f1f1f1]">
                  <div className="h-[7px] rounded-[50px] block w-[60%] bg-[#6C6CFF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-[18px] mt-[50px] max-md:mt-[30px] max-md:grid max-md:grid-cols-2 max-md:gap-y-[30px] max-md:justify-between max-md:gap-x-[130px] max-sm:gap-x-0">
          <div className="flex gap-x-[15px] max-sm:gap-x-[10px]">
            <FireIcon />
            <div className="flex flex-col justify-between h-full max-sm:justify-normal">
              <h3 className="text-[18px] text-title-color font-bold">50 +</h3>
              <span className="text-sm">Project completed</span>
            </div>
          </div>

          <div className="flex gap-x-[15px] max-sm:gap-x-[10px]">
            <CupIcon />
            <div className="flex flex-col justify-between h-full max-sm:justify-normal">
              <h3 className="text-[18px]">30 +</h3>
              <span className="text-sm">Cup of coffee</span>
            </div>
          </div>

          <div className="flex gap-x-[15px] max-sm:gap-x-[10px]">
            <PeopleIcon />
            <div className="flex flex-col justify-between h-full max-sm:justify-normal">
              <h3 className="text-[18px]">40 +</h3>
              <span className="text-sm">Satisfied clients</span>
            </div>
          </div>

          <div className="flex gap-x-[15px] max-sm:gap-x-[10px]">
            <BadgeIcon />
            <div className="flex flex-col justify-between h-full max-sm:justify-normal">
              <h3 className="text-[18px]">60 +</h3>
              <span className="text-sm">Nominees winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
