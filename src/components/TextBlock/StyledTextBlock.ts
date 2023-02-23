import styled from "styled-components";
import { styledFontColor1, styledFontColor2 } from "../../assets/variables";

const StyledTextBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${styledFontColor2};
    border-bottom: 2px solid ${styledFontColor1};
    padding-bottom: 0.5rem;
    text-align: center;

    @media screen and (min-width: 1024px) {
        padding-bottom: 1rem;
        text-align: start;
    }
  }
`;
export default StyledTextBlock;
