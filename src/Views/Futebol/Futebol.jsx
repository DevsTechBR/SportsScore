import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";

const Futebol = () => {
  return (
    <div className="bg-chumbo w-full">
      <Header />
      <div className="mr-20 ml-20 mt-12 mb-12">
        <Banner />
        <section className="flex justify-between">
          <div>
            {/* DivRight */}
            <div className="my-3.5 flex gap-3 ">
              {/* Matches */}
              <div className="h-20 w-20 bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <img src="src\assets\img\premierDesactived.svg" alt="" />
              </div>
              <div className="h-20 w-20  bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <img src="src\assets\img\jordanDesactived.svg" alt="" />
              </div>
            </div>
            <h1 className="text-3xl my-8 text-white font-bold">Partidas</h1>
            <div>
              <div className="w-[700px] h-20 my-3.5 font-bold bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <span className="text-xl text-white">Real Madrid</span>
                <div className="w-14 h-14  text-white border-textColor border rounded-full flex items-center justify-center">
                  3 X 2
                </div>
                <span className="text-xl text-white ">Real Madrid</span>
              </div>
              <div className="w-[700px] h-20 my-3.5 font-bold bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <span className="text-xl text-white">Real Madrid</span>
                <div className="w-14 h-14  text-white border-textColor border rounded-full flex items-center justify-center">
                  3 X 2
                </div>
                <span className="text-xl text-white ">Real Madrid</span>
              </div>
            </div>
          </div>
          <div>
            {/* DivLeft */}
            <div className="flex my-2.5 flex-col gap-2">
              {/* Others Matches */}
              <h1 className="text-base my-1 text-white font-bold">
                Outras Partidas
              </h1>
              <div className="w-[350px] h-14 font-bold bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <span className="text-xs text-white">Real Madrid</span>
                <div className="w-10 h-10 text-xs text-white border-textColor border rounded-full flex items-center justify-center">
                  3 X 2
                </div>
                <span className="text-xs text-white ">Real Madrid</span>
              </div>
              <div className="w-[350px] h-14  font-bold bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <span className="text-xs text-white">Real Madrid</span>
                <div className="w-10 h-10 text-xs text-white border-textColor border rounded-full flex items-center justify-center">
                  3 X 2
                </div>
                <span className="text-xs text-white ">Real Madrid</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <h1 className="text-base m-2 text-white font-bold">Notícias</h1>
              <div className="w-[350px] h-40 bg-cards shadow-boxShadow rounded-xl">
                {/* News Card */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Futebol;
