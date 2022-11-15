import "./style.scss";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
