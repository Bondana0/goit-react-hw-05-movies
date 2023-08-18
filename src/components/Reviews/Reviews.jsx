import Section from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/Api';
import { StyledContent, StyledReviews, StyledUserName } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <Section>
      {reviews.length ? (
        <ol>
          {reviews.map(({ id, author, content }) => {
            return (
              <StyledReviews key={id}>
                <StyledUserName>{`${author}:`}</StyledUserName>
                <StyledContent>{content}</StyledContent>
              </StyledReviews>
            );
          })}
        </ol>
      ) : (
        <div> We don't have any reviews for this movie</div>
      )}
    </Section>
  );
};
export default Reviews;
