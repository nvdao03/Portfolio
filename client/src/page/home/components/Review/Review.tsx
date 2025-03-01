import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../../../apis/reviews.api';
import { ReviewType } from '../../../../types/review.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function Review() {
  const queryReviews = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews
  });

  const { data } = queryReviews;

  return (
    <section className="custom-container custom-section">
      <h2 className="custom-section-title">Client & Reviews</h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
      >
        <div className="grid max-w-[700px] m-auto">
          {data?.data.map((review: ReviewType) => {
            return (
              <SwiperSlide
                className="text-center pt-0 px-3 pb-10"
                key={review.id}
              >
                <div className="h-[56px] w-[56px] my-0 mx-auto">
                  <img
                    className="object-cover"
                    src={`http://localhost:4000${review.image}`}
                    alt={review.title}
                  />
                </div>
                <h3 className="mt-3">{review.title}</h3>
                <span className="text-[#8b88b1] mt-3 mb-5 block">
                  {review.subtitle}
                </span>
                <p
                  className="bg-white max-w-[700px] mx-auto p-[20px] mt-[20px] rounded-[20px] relative shadow-sm leading-[1.5] 
                before:contents-[''] before:w-0 before:h-0 before:border-l-[10px] before:border-solid before:border-l-transparent 
                before:border-r-[10px] before:border-r-transparent before:border-b-[15px] before:border-b-white before:absolute before:left-[60%] before:-top-[10px] before:-translate-x-[75px] "
                >
                  {review.comment}
                </p>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
}
