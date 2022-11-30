import { Children } from "../../../types";

type Props = {
  children: Children;
  isTrue: boolean;
};

const RenderIf = ({ children, isTrue }: Props) => (
  <>{isTrue ? children : null}</>
);

export default RenderIf;
