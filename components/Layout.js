// our home page
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const { data: session } = useSession();
  // if (!session) {
  //   return (
  //     <div className="bg-blue-900 w-screen h-screen flex items-center">
  //       <div className="text-center w-full">
  //         {" "}
  //         <button
  //           onClick={() => signIn("google")}
  //           className="bg-gray-300 p-2 px-4 rounded-lg"
  //         >
  //           Login With Google
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="bg-bgGary min-h-screen">
      <div className=" md:hidden flex items-center p-4 ">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>

      <div className=" flex">
        <Nav show={showNav} />
        <div className="flex-grow  p-4">{children}</div>
      </div>
    </div>
  );
}
