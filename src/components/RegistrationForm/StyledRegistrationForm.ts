import styled from "styled-components";

const StyledRegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;

  div {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }

  button {

  }
`;

export default StyledRegistrationForm;
