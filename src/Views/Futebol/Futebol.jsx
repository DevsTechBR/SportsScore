import Banner from "../../Components/Banner/Banner";
import CardsJogos from "../../Components/CardsJogos/CardsJogos";
import Header from "../../Components/Header/Header";

const Futebol = () => {
  return (
    <div className="bg-chumbo w-full">
      <Header />
      <div className="mr-20 ml-20 mt-12 mb-12">
        <Banner />
        <CardsJogos />
      </div>
    </div>
  );
};

export default Futebol;
