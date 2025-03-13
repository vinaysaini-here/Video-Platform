import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./searchInput";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
        <div className="flex items-center gap-4 w-full ">
          {/* {Logo And Menu Button} */}
          <div className="flex items-center  ">
            <SidebarTrigger />
            <Link href="/">
              <div className="flex items-center gap-1 p-4">
                <Image src="/logo.svg" alt="Logo" width={38} height={38} />
                <p className="text-xl font-semibold tracking-tight ">
                  Video PlatForm
                </p>
              </div>
            </Link>
          </div>

          {/* {Search Bar} */}
          <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
            <SearchInput />
          </div>
        </div>

        {/* {Signin/up btn} */}

        <div>
            <AuthButton/>
        </div>
      </nav>
    </>
  );
};
