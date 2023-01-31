import styled from "styled-components";
import { secondaryFontColor, styledFontColor1 } from "../../assets/variables";

const StyledBookSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${secondaryFontColor};
  padding: 1.25rem 0;
  width: 100%;

  .books {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: #ebecee;
    width: 100%;
  }

  h2 {
    color: ${styledFontColor1};
  }
`;
export default StyledBookSection;
