import styled from "styled-components";
import { gradient, secondaryFontColor } from "../../assets/variables";

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: ${gradient};
  color: ${secondaryFontColor};
  padding: 2rem 1.5rem;
  width: 100%;

  h2 {
    font-size: 1.125rem;

    @media screen and (min-width: 1024px) {
        font-size: 2.25rem;
    }
  }

  p {
    max-width: 316px;
    text-align: center;

    @media screen and (min-width: 1024px) {
        max-width: unset;
    }
  }

  input {
    background: transparent;
    max-width: 380px;
    width: 100%;
    border-radius: 24px;
    border: 1px solid ${secondaryFontColor};
    font-size: 0.875rem;
    line-height: 21px;
    outline: none;
    padding: 0.625rem 1.5rem;
    text-align: center;

    &::placeholder {
      color: ${secondaryFontColor};
      
    }
  }
`;

export default StyledBanner;
