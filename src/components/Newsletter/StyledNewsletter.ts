import styled from "styled-components";
import { secondaryFontColor, styledFontColor1, styledFontColor2 } from "../../assets/variables";

const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  background-color: ${secondaryFontColor};
  align-items: center;
  padding: 1rem 0.5rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 3.5rem 0.5rem;
  }

  .text {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    color: ${styledFontColor2};
    text-align: center;

    h2 {
        font-weight: 500;
    }

    @media screen and (min-width: 1024px) {
        text-align: start;
        max-width: 353px;
    }
  }

  input {
    width: 327px;
  }
`;

export default StyledNewsletter;
