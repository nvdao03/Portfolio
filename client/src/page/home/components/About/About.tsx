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

        <div className="grid gap-x-[19px] grid-cols-[3fr,8fr]">
          <img
            src={avatar}
            alt="Van Dao"
            className="w-[150px] h-[150px] bg-center rounded-[50%]"
          />

          <div className="grid-cols-[repeat(2,1fr)] gap-x-[30px] relative p-[19px] grid bg-[#fff] rounded-[20px] shadow-md">
            <div>
              <p className="mb-[20px] leading-6">
                I am a student at Hanoi University of Natural Resources and
                Environment. Currently I am studying and working on Web Front
                End development. My long term goal is to become a Full Stack Web
                developer
              </p>
              <a href="#!" className="custom-btn-primary">
                Download CV
              </a>
            </div>

            <div className="grid gap-y-[13px]">
              {/* development */}
              <div>
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="font-medium">Development</h3>
                  <span className="leading-3">90%</span>
                </div>

                <div className="bg-[#f1f1f1]">
                  <div className="h-[7px] rounded-[50px] block w-[90%] bg-[#FFD15C]"></div>
                </div>
              </div>

              {/* uiDesign */}
              <div>
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="font-medium">UI/UX design</h3>
                  <span className="leading-3">80%</span>
                </div>

                <div className="bg-[#f1f1f1]">
                  <div className="h-[7px] rounded-[50px] block w-[80%] bg-[#FF4C60]"></div>
                </div>
              </div>

              {/* photography */}
              <div>
                <div className="flex items-center justify-between mb-[10px]">
                  <h3 className="font-medium">Photography</h3>
                  <span className="leading-3">60%</span>
                </div>

                <div className="bg-[#f1f1f1]">
                  <div className="h-[7px] rounded-[50px] block w-[60%] bg-[#6C6CFF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-[18px] mt-[50px]">
          <div className="flex gap-x-[15px]">
            <FireIcon />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-[18px] text-title-color font-bold">50 +</h3>
              <span className="text-sm">Project completed</span>
            </div>
          </div>

          <div className="flex gap-x-[15px]">
            <CupIcon />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-[18px]">5670</h3>
              <span className="text-sm">Cup of coffee</span>
            </div>
          </div>

          <div className="flex gap-x-[15px]">
            <PeopleIcon />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-[18px]">427</h3>
              <span className="text-sm">Satisfied clients</span>
            </div>
          </div>

          <div className="flex gap-x-[15px]">
            <BadgeIcon />
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-[18px]">35</h3>
              <span className="text-sm">Nominees winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
