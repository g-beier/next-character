import type { FunctionComponent, PropsWithChildren } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LoginPage from "./loginPage";

const Layout: FunctionComponent = async (props: PropsWithChildren) => {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <>
        <main>
          <div className="flex flex-row justify-between">
            <div className="inline-flex gap-4">
              <span>{session?.user?.name}</span>
              <span>{session?.user?.email}</span>
            </div>
          </div>
          {props.children}
        </main>
      </>
    );
  } else {
    return <LoginPage />;
  }
};

export default Layout;
