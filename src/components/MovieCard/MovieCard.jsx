import { StyledPoster } from '../MovieItem/MovieItem.styled';
import PropTypes from 'prop-types'
import React, { useRef } from 'react';
import { StyledMovieCard, StyledMovieInfo, StyledBackButton } from './MovieCard.styled';
import { Link, useLocation } from 'react-router-dom';
import { StyledTitle } from 'components/Layout/Layout.styled';


const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const {
    poster_path,
    title,
    release_date,
    overview,
    vote_average,
    genres,
  } = movie;

  
  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
        : 'Not rated yet';

  return (
  <>
  <Link to={backLinkLocationRef.current}>
        <StyledBackButton type="button">Back to</StyledBackButton>
      </Link>
    <StyledMovieCard>
      {poster_path && (
        <StyledPoster
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={`${title} poster`}
        />
      )}

      <StyledMovieInfo>
        {title && (
          <StyledTitle>
            <span>{`${title} (${release_date.slice(0, 4) ?? ''})`}</span>
          </StyledTitle>
        )}
        <p>{`User score: ${userScore}`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres && (
          <>
            <h3>Genres</h3>
            <p>{genres.map(({name})=> name).join(', ')}</p>
          </>
        )}
      </StyledMovieInfo>
    </StyledMovieCard>
    </>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
