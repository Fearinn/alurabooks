import styled from "styled-components";

const StyledListedBooks = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
    align-content: stretch;
    gap: 1.5rem;
    list-style: none;
    padding: 1rem;
    width: 100%;
`
export default StyledListedBooks