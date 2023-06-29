import search from "../../assets/img/search.svg";

export default function Header() {
  return (
    <header className="flex bg-chumbo h-16 p-5 justify-center items-center max-sm:p-2">
      <nav className="w-11/12 p-2 flex justify-between items-center font-bold">
        <h1 className="text-3xl text-white">SportsScore</h1>
        <ul className="flex w-1/5 justify-evenly max-lg:w-2/5 max-sm:justify-end">
          <li className="text-base text-white cursor-pointer max-sm:hidden">
            Futebol
          </li>
          <li className="text-base text-white cursor-pointer max-sm:hidden">
            Basquete
          </li>
          <li className="hidden max-sm:flex">
            <img
              className="w-6 h-6 cursor-pointer"
              src={search}
              alt="Search"
              aria-label="Search Button"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
