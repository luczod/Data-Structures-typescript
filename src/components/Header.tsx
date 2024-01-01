import { MenuIcon } from './icons/Menu';
import { XIcon } from './icons/xIcon';

type TNavLinks = { tooltip: string; text: string };

export function Headerfn() {
  return (
    <header>
      <nav className="border-gray-200 shadow-xl px-4 lg:px-6  bg-[#4051B5]">
        <h1 className="text-white  ml-32 mb-1 pt-2 text-2xl">
          Learning JavaScript Data Structures and Algorithms
        </h1>
        <div className="flex flex-wrap justify-between items-center mx-36 max-w-screen">
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon />
              <XIcon />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col space-x-2  font-medium lg:flex-row  lg:mt-0">
              <NavLinks text="03" tooltip="chapter 03: Stacks" />
              <NavLinks text="04" tooltip="chapter 04: Queues and Deques" />
              <NavLinks text="05" tooltip="chapter 05: LinkedLists" />
              <NavLinks text="06" tooltip="chapter 06: LinkedLists" />
              <NavLinks text="07" tooltip="chapter 07: Dictionaries and Hashes" />
              <NavLinks text="08" tooltip="chapter 08:" />
              <NavLinks text="09" tooltip="chapter 09:" />
              <NavLinks text="10" tooltip="chapter 10:" />
              <NavLinks text="11" tooltip="chapter 11:" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLinks({ text, tooltip }: TNavLinks) {
  return (
    <li className="tooltip">
      <a href="#" className="lineLink hover:text-gray-50 text-gray-400" aria-current="page">
        {text}
      </a>
      <span className="tooltiptext">{tooltip}</span>
    </li>
  );
}
