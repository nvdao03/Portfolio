import http from '../utils/http';

export const getReviews = () => {
  return http.get('reviews');
};
