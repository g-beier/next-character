import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FunctionComponent } from "react";
import LoginButton from "../LoginButton";

const Logo: FunctionComponent<{ className: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 29 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.549011 8.99997V0.167969H1.32901L5.93701 7.35597V0.167969H6.88501V8.99997H6.10501L1.49701 1.81197V8.99997H0.549011Z"
        fill="currentColor"
      />
      <path
        d="M10.4444 9.04797C10.2524 9.04797 10.0484 9.03197 9.83242 8.99997C9.61642 8.95997 9.41242 8.88397 9.22042 8.77197C9.02842 8.65997 8.87242 8.49197 8.75242 8.26797C8.63242 8.03597 8.57242 7.72397 8.57242 7.33197V1.94397C8.57242 1.59997 8.62042 1.31597 8.71642 1.09197C8.82042 0.859969 8.95642 0.679969 9.12442 0.551969C9.29242 0.415969 9.48042 0.319969 9.68842 0.263969C9.89642 0.199969 10.1044 0.167969 10.3124 0.167969C10.8084 0.175969 11.2684 0.187969 11.6924 0.203969C12.1164 0.211969 12.5164 0.223969 12.8924 0.239969C13.2764 0.247969 13.6484 0.259969 14.0084 0.275969V1.04397H10.5524C10.2404 1.04397 9.99242 1.12797 9.80842 1.29597C9.62442 1.46397 9.53242 1.73197 9.53242 2.09997V4.18797L13.4804 4.24797V4.97997L9.53242 5.03997V7.11597C9.53242 7.41197 9.58042 7.63597 9.67642 7.78797C9.78042 7.93997 9.91642 8.03997 10.0844 8.08797C10.2524 8.13597 10.4244 8.15997 10.6004 8.15997H14.0084V8.92797C13.6404 8.95197 13.2524 8.97197 12.8444 8.98797C12.4444 9.00397 12.0404 9.01597 11.6324 9.02397C11.2324 9.03197 10.8364 9.03997 10.4444 9.04797Z"
        fill="currentColor"
      />
      <path
        d="M20.4754 8.99997L15.2554 0.275969H16.5874L18.3514 3.45597L18.4594 3.75597L18.5554 3.45597L20.3434 0.275969H21.6154L19.0714 4.47597L21.7714 8.99997H20.4754Z"
        fill="currentColor"
      />
      <path
        d="M25.1191 8.99997V1.03197H22.3951V0.167969H28.8031V1.03197H26.0791V8.99997H25.1191Z"
        fill="currentColor"
      />
      <path
        d="M17.4994 5.03998L15.0994 8.99998H16.3354L17.7274 6.47998C17.8234 6.31998 17.8674 6.15198 17.8594 5.97598C17.8514 5.79998 17.8114 5.63198 17.7394 5.47198C17.6714 5.30798 17.5914 5.16398 17.4994 5.03998Z"
        fill="#d97706"
      />
    </svg>
  );
};

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex justify-between items-center py-2 px-8">
      <Link href="/">
        <Logo className={`h-8`} />
      </Link>
      {session && (
        <div className="flex flex-row flex-nowrap gap-8">
          <Link href="/character">Personagem</Link>
        </div>
      )}
      {!session && <LoginButton />}
    </header>
  );
};

export default Header;
