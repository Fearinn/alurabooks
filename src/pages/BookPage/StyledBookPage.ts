import styled from "styled-components";
import { bookCoverShadow, gradient } from "../../assets/variables";

const StyledBookPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  padding: 2rem;

  .book-details {
    display: grid;
    grid-template-areas:
      "one two"
      "three three";
    gap: 1.5rem;
    width: 100%;

    @media screen and (min-width: 1024px) {
      grid-template-areas:
        "one two two"
        "one three three"
    }

    @media screen and (min-width: 1728px) {
      grid-template-areas:
        "one two two"
        "one three three";
    }

    img {
      grid-area: one;
      aspect-ratio: 381/480;
      ${bookCoverShadow};
      max-height: 240px;
      height: 100%;

      @media screen and (min-width: 765px) {
        max-height: 480px;
        justify-self: flex-end;
      }

      @media screen and (min-width: 1728px) {
        max-height: unset;
      }
    }

    .main-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      grid-area: two;
      height: fit-content;
      width: 100%;

      h2 {
        font-size: 1rem;
        background: ${gradient};
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;

        @media screen and (min-width: 1024px) {
          font-size: 1.5rem;
        }
      }

      p {
        font-size: 1.125rem;
      }

      span {
        margin-top: 0.5rem;
      }
    }

    .options {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-area: three;
      gap: 1rem;
      height: fit-content;
      width: 100%;

      div {
        width: 100%;
      }

      & > span {
        opacity: 0.54;
        font-weight: bold;
      }
    }
  }
`;

export default StyledBookPage;
