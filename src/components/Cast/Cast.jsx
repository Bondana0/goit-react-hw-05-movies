import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/Api';
import {
  StyledActorItem,
  StyledActorsList,
  StyledInfo,
  StyledName,
  StyledWrap,
} from './Cast.styled';
import Section from 'components/Section/Section';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
 
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        setCast(cast);

      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <Section>
      <StyledActorsList>
        {cast.map(
          ({
            id,
            profile_path,
            name,
            character,
          }) => {
            return (
              <StyledActorItem key={id}>
                <StyledWrap>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt=""
                  width="100"
                  />
                </StyledWrap>

                <div>
                  <StyledName>{name}</StyledName>
                  <StyledInfo>
                    {character
                      ? `Character: ${character}`
                      : 'Unknown'}
                  </StyledInfo>
                </div>
              </StyledActorItem>
            );
          }
        )}
      </StyledActorsList>
    </Section>
  );
};
export default Cast;
