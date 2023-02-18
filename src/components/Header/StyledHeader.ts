import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 0;
  height: 80px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding: 1.125rem 5rem;
    gap: 2rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    height: 100%;

    @media screen and (min-width: 1024px) {
      margin-right: 1rem;
    }

    @media screen and (max-width: 475px) {
      display: none;
    }

    .logo-image {
      background: url("/logo-noname.svg") center no-repeat;
      height: 100%;
      aspect-ratio: 1;
    }

    h1 {
      display: none;
      font-weight: 400;
      @media screen and (min-width: 1024px) {
        display: inline-block;
      }

      span {
        font-weight: 700;
      }
    }
  }

  .user-navigation {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    gap: 0.5rem;

    @media screen and (max-width: 428px) {
      justify-content: center;
    }
  }

  button,
  nav :is(a, button) {
    font-size: 1rem;
    padding: 0.625rem;
    text-transform: uppercase;

    &:hover {
      background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
      color: #ffffff;
    }
  }
`;

export const StyledUserOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .login-bg {
    aspect-ratio: 1;
    background: url("/profile.svg");
    background-size: contain;
    border-radius: 50%;
    height: 2rem;
  }

  span {
    font-size: 1.25rem;
  }

  &:hover {
    .login-bg {
      background-color: #ffffff;
    }
  }
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
  }

  img {
    aspect-ratio: 1;
    height: 277px;
  }
`;


