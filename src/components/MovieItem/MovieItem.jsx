import {
  LinkItem,
  StyledMovieItem,
  StyledMovieTitle,
  StyledPoster,
} from './MovieItem.styled';
import PropTypes from 'prop-types';

const MoviePostItem = ({ movie }) => {
  const { id, poster_path, title } = movie;

  return (
    <StyledMovieItem>
      <LinkItem to={`/movies/${id}`}>
        <StyledPoster
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt=""
              width="200"
        />

        <StyledMovieTitle>{title}</StyledMovieTitle>
      </LinkItem>
    </StyledMovieItem>
  );
};

MoviePostItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
};
export default MoviePostItem;
