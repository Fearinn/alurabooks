import styled from "styled-components"
import { styledFontColor2 } from "../../assets/variables"

const StyledLateralNav = styled.nav`
    display: flex;
    flex-direction: column;
    color: ${styledFontColor2};

    a {
        padding: 1rem;
        border-bottom: 2px solid #C4C4C4;

        &:first-child {
            padding-top: 0;
        }
    }
`

export default StyledLateralNav