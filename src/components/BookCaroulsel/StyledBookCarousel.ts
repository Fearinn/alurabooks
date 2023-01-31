import styled from "styled-components";

export const StyledBookCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  overflow-x: hidden;
  width: 100%;

  &:has(.book-cover:active) {
    .book-cover {
        opacity: 0.9;
    }
  }
`;

export const StyledBookCover = styled.div<{ selected: boolean }>`
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    ${({selected}) => !selected && "transform: scale(0.7)"}
  }
`;

