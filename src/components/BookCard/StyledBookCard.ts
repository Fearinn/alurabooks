import styled from "styled-components";
import { styledFontColor1 } from "../../assets/variables";

const StyledBookCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .book-label {
    color: ${styledFontColor1};
    font-weight: 700;
  }

  .book-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .book-options {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 1024px) {
      flex-direction: column;
    }

    .book-icons {
      display: flex;
      gap: 2.75rem;

      @media screen and (min-width: 1024px) {
        gap: 3.25rem;
      }
    }
  }

  .book-title {
    color: #002f52;
  }

  .book-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .book-price {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span:first-child {
      opacity: 0.54;
    }

    span:last-child {
      color: #002f52;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;
export default StyledBookCard;
