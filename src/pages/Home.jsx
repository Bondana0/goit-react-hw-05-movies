import { useEffect, useState } from 'react';
import { fetchMovieTrends } from '../components/Api';
import MoviePostList from 'components/MovieList/MovieList';
import Section from 'components/Section/Section';
import { StyledTitle } from 'components/Layout/Layout.styled';


const Home = () => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const { results } = await fetchMovieTrends();
       
        setMovies(results);
      } catch (error) {
        console.log(error);
      } 
    };

    trendingMovies();
  }, []);

  return (
  
      <Section>
        {
          <>
            <StyledTitle>Trending films</StyledTitle>
            <MoviePostList movies={movies} />
          </>
        }
      </Section>
    
  );
};

export default Home;
