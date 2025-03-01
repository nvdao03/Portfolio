import http from '../utils/http';

export const getWorks = () => {
  return http.get('works');
};
