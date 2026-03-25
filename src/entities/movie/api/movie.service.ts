import { api } from '@/shared/api/api.instance';
import { Movie, Movies, MovieSchema } from '../model/types';

export const MovieService = {
  async getRandom() {
    const { data } = await api.get<Movie>('/movie/random');
    return MovieSchema.parse(data);
  },
  async getTop10() {
    const { data } = await api.get<Movies>('/movie/top10');
    return MovieSchema.parse(data);
  },
};
