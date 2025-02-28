import http from '../utils/http';

export const getService = () => {
  return http.get('services');
};
