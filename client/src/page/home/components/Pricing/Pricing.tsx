import Image1 from '../../../../assets/imgs/pricing/price-1.svg';
import Image2 from '../../../../assets/imgs/pricing/price-2.svg';
import Image3 from '../../../../assets/imgs/pricing/price-3.svg';

export default function Pricing() {
  return (
    <div className="custom-container custom-section">
      <h2 className="custom-section-title">Pricing Plans</h2>

      <div className="grid-cols-3 items-center grid max-md:grid-cols-1 max-md:gap-y-[20px]">
        <div className="text-center py-[20px] px-[30px] bg-white rounded-[20px] shadow-sm">
          <img src={Image1} alt="Basic" className="mx-auto" />
          <h3 className="my-[20px] mx-0 text-[20px]">Basic</h3>
          <p className="mb-[10px] leading-[1.5]">
            A Simple option but powerful to manage your business
          </p>
          <p className="mb-[15px]">Email support</p>
          <h3 className="text-[30px] font-bold mb-[15px]">
            <em className="text-[16px] align-super ml-[10px]">$</em> 9
            <span className="text-[19px] font-normal ml-[10px]">Month</span>
          </h3>
          <a href="#!" className="custom-btn-primary">
            Get Started
          </a>
        </div>

        <div className="text-center py-[50px] px-[25px] relative z-[20] bg-white rounded-[20px] shadow-sm best">
          <span className="custom-pricing-badge">Recommened</span>
          <img src={Image2} alt="Recommened" className="mx-auto" />
          <h3 className="my-[20px] mx-0 text-[20px]">Premium</h3>
          <p className="mb-[10px] leading-[1.5]">
            Unlimited product including app integration and more features
          </p>
          <p className="mb-[15px]">Mon-Fri support</p>
          <h3 className="text-[30px] font-bold mb-[15px]">
            <em className="text-[16px] align-super ml-[10px]">$</em> 15
            <span className="text-[19px] font-normal ml-[10px]">Month</span>
          </h3>
          <a href="#!" className="custom-btn-primary">
            Get Started
          </a>
        </div>

        <div className="text-center py-[20px] px-[30px] bg-white rounded-[20px] shadow-sm">
          <img src={Image3} alt="Ultimate" className="mx-auto" />
          <h3 className="my-[20px] mx-0 text-[20px]">Ultimate</h3>
          <p className="mb-[10px] leading-[1.5]">
            A wise option for large companies and individuals
          </p>
          <p className="mb-[15px]">24/7 support</p>
          <h3 className="text-[30px] font-bold mb-[15px]">
            <em className="text-[16px] align-super ml-[10px]">$</em> 19
            <span className="text-[19px] font-normal ml-[10px]">Month</span>
          </h3>
          <a href="#!" className="custom-btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
