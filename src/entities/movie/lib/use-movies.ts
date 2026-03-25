import { useQuery } from '@tanstack/react-query';
import { MovieService } from '../api/movie.service';

export const useRandomMovie = () => {
  return useQuery({
    queryKey: ['movie', 'random'],
    queryFn: () => MovieService.getRandom(),
    staleTime: 0,
  });
};

export const useTopMovies = () => {
  return useQuery({
    queryKey: ['movies', 'top'],
    queryFn: () => MovieService.getTop10(),
  });
};
