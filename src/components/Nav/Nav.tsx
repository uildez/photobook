import { Moon, Sun } from "phosphor-react";
import { SearchBar } from "../SearchBar/SearchBar";

import { useTheme } from "next-themes";

import LogoDark from "../../assets/images/SVG/logo-dark.svg";
import LogoLight from "../../assets/images/SVG/logo-light.svg";

export function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex fixed justify-between w-screen z-50 items-center px-6 py-5 md:flex-row bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-md md:px-24 mobile:flex-col">
      <a
        href="#"
        className="flex items-center text-slate-600 text-2xl dark:text-white md:mb-0 md:text-4xl mobile:text-3xl mobile:mb-4"
      >
        <img
          src={LogoLight}
          className="hidden w-8 mr-4 dark:block"
          width="100%"
          height="100%"
          alt="logo"
        />
        <img
          src={LogoDark}
          className="block w-8 mr-4 dark:hidden"
          width="100%"
          height="100%"
          alt="logo"
        />
        Photo<strong className="text-red-600">Book</strong>
      </a>
      <div className="flex md:flex gap-2 flex-row items-center md:gap-4 mr-4">
        <SearchBar />
        <Sun
          size={37}
          className="icon-switch hover:bg-slate-700 bg-slate-600 text-white hidden dark:block"
          onClick={() => setTheme("light")}
        />
        <Moon
          size={37}
          className="icon-switch hover:bg-slate-300 bg-slate-200 text-red-600 dark:hidden"
          onClick={() => setTheme("dark")}
        />
      </div>
    </div>
  );
}
