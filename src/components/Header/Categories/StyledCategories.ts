import styled from "styled-components";
import { gradient, secondaryFontColor, primaryFontColor } from "../../../assets/variables";

const filter = "invert(100%) saturate(0%)";

const StyledCategories = styled.nav<{ open: boolean }>`
  display: inline-block;
  order: -1;
  

  @media screen and (min-width: 1024px) {
    order: 0;
  }

  .main-button {
    background: ${(props: { open: boolean }) =>
      props.open ? gradient : secondaryFontColor};
    color: ${(props: { open: boolean }) =>
      props.open ? secondaryFontColor : primaryFontColor};
    height: 80px;
    aspect-ratio: 1;

    @media screen and (min-width: 1024px) {
      height: auto;
      aspect-ratio: unset;
    }

    &:hover svg {
      filter: ${filter};
    }
  }

  .categories-long {
    display: none;
    @media screen and (min-width: 1024px) {
      display: inline;
    }
  }

  .categories-hamburger {
    svg {
      filter: ${(props: { open: boolean }) => (props.open ? filter : "none")};
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    list-style: none;
    position: absolute;
  }

  .category button {
    display: block;
    background: ${gradient};
    background-clip: text;
    color: transparent;
    text-align: left;
    padding: 1rem 1.5rem;
    width: 100%;
    -webkit-background-clip: text;

    &::after {
      margin: 0.5rem;
      content: ">";
    }
  }
`;

export default StyledCategories;
