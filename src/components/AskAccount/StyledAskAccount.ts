import styled from "styled-components";
import {
  gradient,
  primaryFontColor,
  secondaryFontColor,
} from "../../assets/variables";

const StyledAskAccount = styled.div`
  background: ${gradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  color: ${secondaryFontColor};
  padding: 1.5rem 0;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 332px;
  }


  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    width: 305px;

    h2 {
      font-weight: 500;
    }

    @media screen and (min-width: 1024px) {
        text-align: start;
    }

    @media screen and (min-width: 1728px) {
        width: auto;
    }
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
  }
`;
export default StyledAskAccount;
