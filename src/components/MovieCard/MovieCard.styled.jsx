import styled from 'styled-components'

export const StyledMovieCard = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const StyledMovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const StyledBackButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: transparent;

  transition: transform 250ms ease-in-out 0s;

  &:hover {
    box-shadow: rgb(198, 200, 204) 5px 5px 5px 0px;
  }
`;