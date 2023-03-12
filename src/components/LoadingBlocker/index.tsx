import Loader from "../Loader";
import StyledLoadingBlocker from "./StyledLoadingBlocker";

function LoadingBlocker() {
  return (
    <StyledLoadingBlocker>
      <Loader />
    </StyledLoadingBlocker>
  );
}

export default LoadingBlocker;
