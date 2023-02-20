import StyledMainTitle from "./StyledMainTitle";

function MainTitle({ title }: { title: string }) {
  return (
    <StyledMainTitle>
      <h1>{title}</h1>
    </StyledMainTitle>
  );
}

export default MainTitle;
