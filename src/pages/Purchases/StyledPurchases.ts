import styled from "styled-components";
import { styledFontColor2 } from "../../assets/variables";

const StyledPurchases = styled.section`
display: flex;
flex-direction: column;
gap: 1.5rem;

.container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

h2 {
    color: ${styledFontColor2}
}

ul {
  list-style: none;
  padding: 0 0.5rem;
}

  span {
    font-weight: bold;
  }
`;

export default StyledPurchases;
