import styled from "styled-components";
import { styledFontColor2 } from "../../assets/variables";

const StyledPurchases = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    color: ${styledFontColor2};
  }

  span {
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 0 0.5rem;
  }

  .card {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0.5rem 0;

    &:not(:first-child) {
      border-top: 2px solid ${styledFontColor2};
    }
  }

  .purchase-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default StyledPurchases;
