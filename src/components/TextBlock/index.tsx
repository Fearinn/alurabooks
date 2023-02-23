import ITextBlock from "../../interfaces/TextBlock";
import StyledTextBlock from "./StyledTextBlock";

function TextBlock({ title, children }: ITextBlock) {
  return (
    <StyledTextBlock>
      <h2>{title}</h2>
      <p>{children}</p>
    </StyledTextBlock>
  );
}

export default TextBlock;
