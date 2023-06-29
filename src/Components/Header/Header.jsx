import { useState } from "react";
import search from "../../assets/img/search.svg";
import jordanDesactived from "../../assets/img/jordanDesactived.svg";
import jordanActived from "../../assets/img/jordanActive.svg";
import premierDesactived from "../../assets/img/premierDesactived.svg";
import premierActived from "../../assets/img/premierActived.svg";
import Nav from "../Nav/Nav";

export default function Header() {
  const [premierImage, setPremierImage] = useState(premierDesactived);
  const [jordanImage, setJordanImage] = useState(jordanDesactived);

  const handlePremierClick = () => {
    setPremierImage(premierActived);
  };

  const handleJordanClick = () => {
    setJordanImage(jordanActived);
  };

  return (
    <header className="flex bg-chumbo h-16 p-5 justify-center items-center max-sm:p-2">
      <nav className="w-11/12 p-2 flex justify-between items-center font-bold">
        <h1 className="text-3xl text-white">SportsScore</h1>
        <ul className="flex justify-evenly items-center gap-6 max-sm:justify-end">
          <li className="text-base text-white cursor-pointer max-sm:hidden hover:bg-active">
            <Nav
              activeImage={jordanActived}
              inactiveImage={jordanDesactived}
              onClick={handleJordanClick}
            />
          </li>
          <li className="text-base text-white cursor-pointer max-sm:hidden">
            <Nav
              activeImage={premierActived}
              inactiveImage={premierDesactived}
              onClick={handlePremierClick}
            />
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
