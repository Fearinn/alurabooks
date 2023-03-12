import styled from "styled-components";
import { bookCoverShadow, primaryFontColor } from "../../assets/variables";

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      width: 100%;
    }
  }

  .item-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    border-bottom: 2px solid ${primaryFontColor};
    padding: 1rem 0.5rem;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  .book {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
    }

    img {
      aspect-ratio: 175/250;
      ${bookCoverShadow};
      height: 300px;
      width: auto;
    }

    .book-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }
  }

  .purchase-details {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    width: 100%;
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .purchase-confirmation {
    display: flex;
    align-self: end;
    align-items: center;
    gap: 1rem;

    span {
      font-weight: bold;
    }
  }
`;

export default StyledCart;
