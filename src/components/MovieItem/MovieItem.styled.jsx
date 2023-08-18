import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieItem = styled.li`
  width: calc((100% - 45px) / 4);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  border-bottom: 1px solid #4c4c51;
  border-radius: 6px;
  :hover {
    cursor: zoom-in;
    transform: scale(1.02);
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  `;



export const StyledMovieTitle = styled.p`
  padding: 10px;
  font-size: 14px;
  width: 100%;
  font-weight: 600;
  text-align: center;
  color: #4c4c51;
  text-transform: uppercase;
  border-bottom: 4px;
  flex-grow: 1;
`;

export const StyledPoster = styled.img`
  height: 100%;
  border-radius: 4px;
`;