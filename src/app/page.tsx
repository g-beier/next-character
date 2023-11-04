// HOME PAGE - PÁGINA INICIAL DO APP
// TELA DE APRESENTAÇÃO E TUDO E TAL

import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();
  return <div>Home Page</div>;
}
