import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { fetchMovieName } from '../components/Api';
import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviePostList from 'components/MovieList/MovieList';

const WARNING_MSG = 'Sorry, there are no results for your search query';
const INFO_MSG = 'It just happened';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getMovieByName = async () => {
      try {
        const { results } = await fetchMovieName(searchQuery);
        if (results.length === 0) {
          return toast.info(WARNING_MSG);
        }
        setMovie(results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieByName();
  }, [searchQuery]);


  const handleSearch = searchName => {
    if (searchName === searchQuery) {
      return toast.info(INFO_MSG);
    }
    setSearchQuery(searchName);
  };

  return (
    <>
      <ToastContainer autoClose={3000} transition={Flip} position="top-center" />
      <Searchbar handleSearch={handleSearch} />
      <MoviePostList movies={movies} />
    </>
  );
};

export default Movies;
