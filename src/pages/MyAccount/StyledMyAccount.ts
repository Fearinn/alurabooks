import styled from "styled-components";

const StyledMyAccount = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 1.5rem;
    margin-top: 3rem;
    padding: 0 2rem;
    width: 100%;
  }
`;

export default StyledMyAccount;
