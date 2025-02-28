import http from '../utils/http';

export const getExperiences = () => {
  return http.get('experiences');
};
