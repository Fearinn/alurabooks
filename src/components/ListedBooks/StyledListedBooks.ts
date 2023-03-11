import styled from "styled-components";

const StyledListedBooks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5rem;
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(178px, 250px));
    align-items: stretch;
    justify-content: space-around;
    gap: 1rem;
    list-style: none;
    width: 100%;
  }
`;
export default StyledListedBooks;
