import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";

const Futebol = () => {
  return (
    <div className="bg-chumbo w-full">
      <Header />
      <div className="mr-20 ml-20 mt-12 mb-12">
        <Banner />
        <section>
          <div>
            {/* DivRight */}
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <h1 className="text-3xl text-white font-bold">Partidas</h1>
            <div>
              <div className="w-[700px] h-20 m-4 font-bold bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <span className="text-xl text-white">Real Madrid</span>
                <div className="w-14 h-14  text-white border-textColor border rounded-full flex items-center justify-center">
                  3 X 2
                </div>
                <span className="text-xl text-white ">Real Madrid</span>
              </div>
              <div className="w-[700px] h-20 m-4 font-bold bg-cards shadow-boxShadow rounded-xl flex justify-around items-center">
                <span className="text-xl text-white">Real Madrid</span>
                <div className="w-14 h-14  text-white border-textColor border rounded-full flex items-center justify-center">
                  3 X 2
                </div>
                <span className="text-xl text-white ">Real Madrid</span>
              </div>
            </div>
          </div>
          <div>{/* DivLeft */}</div>
        </section>
      </div>
    </div>
  );
};

export default Futebol;
