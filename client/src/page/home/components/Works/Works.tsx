import { useQuery } from '@tanstack/react-query';
import { getWorks } from '../../../../apis/works.api';
import { WorkType } from '../../../../types/works.type';
import { useEffect, useRef, useState } from 'react';
import SkeletonService from '../../../../components/Skeleton/SkeletonService';

export default function Works() {
  const queryWorks = useQuery({
    queryKey: ['works'],
    queryFn: getWorks
  });

  const { data: dataWorks, isLoading, isSuccess } = queryWorks;
  const [filterWork, setFilterWork] = useState<WorkType[]>([]);
  const [currentTab, setCurrentTab] = useState<String>('Everything');

  useEffect(() => {
    if (isSuccess) {
      setFilterWork(dataWorks?.data);
    }
  }, [dataWorks?.data]);

  const handleFilterWork = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newData = dataWorks?.data;
    const filterCategory = newData.filter(
      (work: WorkType) => work.category === event.currentTarget.textContent
    );

    if (event.currentTarget.textContent === 'Everything') {
      setFilterWork(newData);
    } else {
      setFilterWork(filterCategory);
    }

    setCurrentTab(String(event.currentTarget.textContent));
  };

  console.log(currentTab);

  return (
    <section className="custom-container custom-section" id="work">
      <h2 className="custom-section-title">Recent Work</h2>

      <div className="flex items-center gap-x-[20px] mb-[25px]">
        <button
          onClick={handleFilterWork}
          className={
            currentTab === 'Everything'
              ? `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#FF4C61]`
              : `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#5e5c7f] hover:text-[#FF4C61]`
          }
        >
          Everything
        </button>
        <button
          onClick={handleFilterWork}
          className={
            currentTab === 'Creative'
              ? `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#FF4C61]`
              : `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#5e5c7f] hover:text-[#FF4C61]`
          }
        >
          Creative
        </button>
        <button
          onClick={handleFilterWork}
          className={
            currentTab === 'Art'
              ? `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#FF4C61]`
              : `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#5e5c7f] hover:text-[#FF4C61]`
          }
        >
          Art
        </button>
        <button
          onClick={handleFilterWork}
          className={
            currentTab === 'Design'
              ? `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#FF4C61]`
              : `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#5e5c7f] hover:text-[#FF4C61]`
          }
        >
          Design
        </button>
        <button
          onClick={handleFilterWork}
          className={
            currentTab === 'Branding'
              ? `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#FF4C61]`
              : `cursor-pointer font-semibold transition-all duration-[0.3s] bg-transparent text-[#5e5c7f] hover:text-[#FF4C61]`
          }
        >
          Branding
        </button>
      </div>

      <div className="grid-cols-3 gap-[20px] grid">
        {isLoading && (
          <>
            <SkeletonService />
            <SkeletonService />
            <SkeletonService />
          </>
        )}
        {filterWork.length > 0 && (
          <>
            {filterWork.map((work: WorkType) => {
              return (
                <div
                  className="relative rounded-[20px] cursor-pointer shadow-sm custom-work-card overflow-hidden"
                  key={work.id}
                >
                  <div>
                    <img
                      src={`http://localhost:4000${work.image}`}
                      alt={work.title}
                      className="workImg rounded-[20px]"
                    />
                    <div className="bg-[#6c6ce5] rounded-[20px] absolute left-0 top-0 h-full w-full transition-all duration-[0.3s] opacity-0 hover:opacity-90"></div>
                  </div>

                  <span className="custom-work-category">{work.category}</span>
                  <h3 className="custom-work-title">{work.title}</h3>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
