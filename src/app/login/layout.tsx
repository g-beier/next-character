import { FunctionComponent, PropsWithChildren } from "react";

const Layout: FunctionComponent = (props: PropsWithChildren) => {
  return <span>{props.children}</span>;
};

export default Layout;
