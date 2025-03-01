import { useQuery } from '@tanstack/react-query';
import { getExperiences } from '../../../../apis/experiences.api';
import { ExperienceType } from '../../../../types/experience.type';
import Card from './Card';
import SkeletonExperience from '../../../../components/Skeleton/SkeletonExperience';

export default function Experience() {
  const query = useQuery({
    queryKey: ['experiences'],
    queryFn: getExperiences
  });

  const { data, isLoading } = query;

  return (
    <section className="custom-container custom-section" id="experience">
      <h2 className="custom-section-title">Experience</h2>

      <div className="grid-cols-2 gap-x-[30px] grid max-sm:grid-cols-1 gap-y-[20px]">
        {isLoading && (
          <>
            <SkeletonExperience />
            <SkeletonExperience />
          </>
        )}

        {!isLoading && (
          <>
            <div className="bg-[#fff] p-[20px] rounded-[20px] relative grid">
              {data?.data.map((experience: ExperienceType) => {
                if (experience.category === 'education') {
                  return (
                    <Card
                      key={experience.id}
                      id={experience.id}
                      title={experience.title}
                      year={experience.year}
                      desc={experience.desc}
                      icon={experience.icon}
                    />
                  );
                }
              })}
            </div>

            <div className="bg-[#fff] p-[20px] rounded-[20px] relative grid">
              {data?.data.map((experience: ExperienceType) => {
                if (experience.category === 'experience') {
                  return (
                    <Card
                      key={experience.id}
                      id={experience.id}
                      title={experience.title}
                      year={experience.year}
                      desc={experience.desc}
                      icon={experience.icon}
                    />
                  );
                }
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
