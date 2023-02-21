import styled from "styled-components";
import { styledFontColor2 } from "../../assets/variables";

const StyledMiniBookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${styledFontColor2};
  text-align: center;
  height: 100%;

  img {
    width: 100%;
  }

  h2 {
    font-size: 1.125rem;
  }

  .price-value {
    display: block;
    font-weight: bold;
  }
`;

export default StyledMiniBookCard;
