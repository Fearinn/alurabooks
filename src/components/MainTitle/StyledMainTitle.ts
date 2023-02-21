import styled from "styled-components";

const StyledMainTitle = styled.div`
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  padding: 1rem;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 428px) {
    padding: 2rem 0;
  }

  h1 {
    color: #fff;
    font-size: 1.125rem;

    @media screen and (min-width: 1024px) {
      font-size: 2.25rem;
    }
  }
`;

export default StyledMainTitle;
