import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header
        id="mobile"
        className="fw-dvw h-24 bg-header text-white flex md:hidden items-center justify-between px-8 gap-2"
      >
        <h1 className="font-bold text-2xl">Imersão Next.js</h1>
        <Popover>
          <PopoverTrigger>
            <MenuIcon />
          </PopoverTrigger>
          <PopoverContent className="w-fit flex flex-col">
            <ul className="flex flex-col gap-4 w-fit justify-around">
              <li className="">
                <Link className="flex items-center justify-center" href="/">
                  Home
                </Link>
              </li>
              {/* <hr className="bg-muted-foreground w-full h-px" /> */}
              <li className="">
                <Link
                  className="flex items-center justify-center"
                  href="/posts"
                >
                  Posts
                </Link>
              </li>
              <hr className="bg-muted-foreground w-full h-0.5" />
              <li>
                <Link
                  className="flex items-center justify-center"
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center"
                  href="/cadastro"
                >
                  <Button className="bg-primary cursor-pointer">
                    Cadastrar-se
                  </Button>
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </header>
      <header
        id="desktop"
        className="fw-dvw h-24 bg-header text-white flex max-md:hidden items-center justify-around px-4"
      >
        <h1 className="font-bold text-2xl">Imersão Next.js</h1>
        <ul className="flex flex-row gap-4 px-4 justify-around">
          <li>
            <Link className="" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="" href="/posts">
              Posts
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <Link href="/login">Login</Link>
          <Link href="/cadastro">
            <Button className="bg-primary cursor-pointer">Cadastrar-se</Button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
