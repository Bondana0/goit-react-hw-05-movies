import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieId } from 'components/Api';
import Section from 'components/Section/Section';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledTitle } from 'components/Layout/Layout.styled';


const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDitails, setMovieDitails] = useState({});

  useEffect(() => {
    const getMovieById = async movieId => {
      try {
        const data = await fetchMovieId(movieId);
        setMovieDitails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById(movieId);
  }, [movieId]);

  return (
    <>
      <Section>
        <MovieCard movie={movieDitails} />
      </Section>
      <Section>
        <StyledTitle>Who played here and who thinks what</StyledTitle>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Outlet />
    </>
  );
};

export default MovieDetails;
