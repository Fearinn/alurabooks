import styled from "styled-components";
import { bookCoverShadow, styledFontColor2 } from "../../assets/variables";

const StyledMiniBookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${styledFontColor2};
  height: 100%;
  text-align: center;

  img {
    ${bookCoverShadow};
    width: 100%;
  }

  h2 {
    font-size: 1.125rem;
  }

  a > button {
    width: 100%;
  }

  .price-value {
    display: block;
    font-weight: bold;
  }
`;

export default StyledMiniBookCard;
