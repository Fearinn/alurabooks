import styled from "styled-components";

const StyledMyAccount = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;

  header {
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
  }

  main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 0 2rem;
    width: 100%;
  }
`;

export default StyledMyAccount
