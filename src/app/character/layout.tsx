import type { FunctionComponent, PropsWithChildren } from "react";

const Layout: FunctionComponent = (props: PropsWithChildren) => {
  return <main>{props.children}</main>;
};

export default Layout;
