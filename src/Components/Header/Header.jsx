import React from "react";
import search from "../../assets/img/search.svg";

export default function Header() {
  return (
    <header className="flex bg-current h-16 p-5 justify-center items-center">
      <nav className="w-11/12 p-2 flex justify-between items-center font-bold">
        <h1 className="text-3xl text-white ">SportsScore</h1>
        <ul className="flex w-1/6 justify-evenly">
          <li className="text-base text-white cursor-pointer">Futebol</li>
          <li className="text-base text-white cursor-pointer">Basquete</li>
          <li className="hidden">
            <img src={search} alt="Search" aria-label="Search Button" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
