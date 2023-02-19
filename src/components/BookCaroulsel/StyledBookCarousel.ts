import styled from "styled-components";

export const StyledBookCarousel = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;
  overflow-x: scroll;

  &:has(.book-cover:active) {
    .book-cover {
      opacity: 0.9;
    }
  }
`;

export const StyledBookCover = styled.div<{ selected: boolean }>`
  cursor: pointer;
  width: 40%;
  flex-shrink: 0;

  img {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    ${({ selected }) => !selected && "transform: scale(0.7)"}
  }
`;
