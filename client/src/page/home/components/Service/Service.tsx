import { useQuery } from '@tanstack/react-query';
import { getService } from '../../../../apis/service.api';
import SkeletonService from '../../../../components/Skeleton/SkeletonService';
import { ServiceType } from '../../../../types/service.type';

export default function Service() {
  const query = useQuery({
    queryKey: ['services'],
    queryFn: getService
  });

  const { data, isLoading } = query;

  return (
    <section className="custom-container custom-section" id="services">
      <h2 className="custom-section-title">Services</h2>

      <div className="grid grid-cols-3 gap-x-5">
        {isLoading && (
          <>
            <SkeletonService />
            <SkeletonService />
            <SkeletonService />
          </>
        )}

        {!isLoading && (
          <>
            {data?.data.map((service: ServiceType) => {
              return (
                <div className="custom-service-card" key={service.id}>
                  <img
                    src={`http://localhost:4000${service.image}`}
                    alt={service.title}
                    className="mb-[25px] mx-auto"
                  />

                  <h3 className="mb-[10px] text-[#FFF]">{service.title}</h3>
                  <p className="text-[#f8f9fa] leading-[1.5]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
