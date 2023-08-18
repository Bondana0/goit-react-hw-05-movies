import MoviePostItem from "../MovieItem/MovieItem";
import { StyledMovieList } from "./MovieList.styled";
import PropTypes from 'prop-types';

const MoviePostList = ({ movies }) => {
  return (
    <StyledMovieList>
          {movies.map(movie => {
            return <MoviePostItem key={movie.id} movie={movie} />
          })}
    </StyledMovieList>
  );
};

MoviePostList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  })),
};
export default MoviePostList;
