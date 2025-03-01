import Image1 from '../../../../assets/imgs/posts/post-1.svg';
import Image2 from '../../../../assets/imgs/posts/post-2.svg';
import Image3 from '../../../../assets/imgs/posts/post-3.svg';

export default function Posts() {
  return (
    <div className="custom-container custom-section" id="posts">
      <h2 className="custom-section-title">Latest Posts</h2>

      <div className="grid-cols-3 gap-x-[20px] grid max-md:grid-cols-2 max-md:gap-y-[20px] max-sm:grid-cols-1">
        <div className="rounded-[20px] overflow-hidden shadow-md bg-white flex flex-col h-full">
          <div className="relative overflow-hidden">
            <a href="#!">
              <span className="text-[#fff] bg-[#FF4C61] rounded-bl-[10px] rounded-br-[10px] absolute top-[0] left-[15px] text-[13px] inline-block p-[8px] [transition:0.3s]">
                Reviews
              </span>
            </a>
            <a href="#!">
              <img
                src={Image1}
                alt=""
                className="scale-[1] transition-all duration-[0.3s] hover:scale-[1.1]"
              />
            </a>
          </div>
          <div className="bg-white p-[20px] flex-1 flex-col flex">
            <h3 className="text-[17px] mb-[10px] leading-[1.5] max-md:text-[15px]">
              5 Best App Development Tool for Your Projects
            </h3>
            <div className="flex gap-x-[6px] leading-[1.5] text-[#8B88B1] mt-auto max-md:text-[14px]">
              <span>09 February, 2022</span>
              <span className="font-bold">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] overflow-hidden shadow-md bg-white flex flex-col h-full">
          <div className="relative overflow-hidden">
            <a href="#!">
              <span className="text-[#fff] bg-[#FF4C61] rounded-bl-[10px] rounded-br-[10px] absolute top-[0] left-[15px] text-[13px] inline-block p-[8px] [transition:0.3s]">
                Tutorial
              </span>
            </a>
            <a href="#!">
              <img
                src={Image2}
                alt=""
                className="scale-[1] transition-all duration-[0.3s] hover:scale-[1.1]"
              />
            </a>
          </div>
          <div className="bg-white p-[20px] flex-1 flex-col flex">
            <h3 className="text-[17px] mb-[10px] leading-[1.5] max-md:text-[15px]">
              on Misconceptions About Payment
            </h3>
            <div className="flex gap-x-[6px] leading-[1.5] text-[#8B88B1] mt-auto max-md:text-[14px]">
              <span>07 February, 2022</span>
              <span className="font-bold">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] overflow-hidden shadow-md bg-white flex flex-col h-full">
          <div className="relative overflow-hidden">
            <a href="#!">
              <span className="text-[#fff] bg-[#FF4C61] rounded-bl-[10px] rounded-br-[10px] absolute top-[0] left-[15px] text-[13px] inline-block p-[8px] [transition:0.3s]">
                Business
              </span>
            </a>
            <a href="#!">
              <img
                src={Image3}
                alt=""
                className="scale-[1] transition-all duration-[0.3s] hover:scale-[1.1]"
              />
            </a>
          </div>
          <div className="bg-white p-[20px] flex-1 flex-col flex">
            <h3 className="text-[17px] mb-[10px] leading-[1.5] max-md:text-[15px]">
              3 Things to know about startup business
            </h3>
            <div className="flex gap-x-[6px] leading-[1.5] text-[#8B88B1] mt-auto max-md:text-[14px]">
              <span>05 February, 2022</span>
              <span className="font-bold">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] overflow-hidden shadow-md bg-white flex-col h-full hidden max-md:flex">
          <div className="relative overflow-hidden">
            <a href="#!">
              <span className="text-[#fff] bg-[#FF4C61] rounded-bl-[10px] rounded-br-[10px] absolute top-[0] left-[15px] text-[13px] inline-block p-[8px] [transition:0.3s]">
                Reviews
              </span>
            </a>
            <a href="#!">
              <img
                src={Image1}
                alt=""
                className="scale-[1] transition-all duration-[0.3s] hover:scale-[1.1]"
              />
            </a>
          </div>
          <div className="bg-white p-[20px] flex-1 flex-col flex">
            <h3 className="text-[17px] mb-[10px] leading-[1.5] max-md:text-[15px]">
              5 Best App Development Tool for Your Projects
            </h3>
            <div className="flex gap-x-[6px] leading-[1.5] text-[#8B88B1] mt-auto max-md:text-[14px]">
              <span>09 February, 2022</span>
              <span className="font-bold">.</span>
              <span>Boldy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
