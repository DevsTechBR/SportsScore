const Home = () => {
  return (
    <section className="relative w-full h-full">
      <div className="w-[37rem] h-[29rem] absolute top-0 bottom-0 left-0 right-0 m-auto flex flex-col items-center justify-center gap-9">
        <h1 className="text-white text-6xl font-bold">SportsScore</h1>
        <span className="text-white text-2xl font-light">
          Veja o placar do seu esporte favorito em tempo real
        </span>
        <div></div>
      </div>
      <main className="w-full flex relative">
        <div className="w-2/4 bg-premier bg-no-repeat bg-cover bg-bottom h-screen bg-origin-content"></div>
        <div className="w-2/4 bg-nba bg-no-repeat bg-cover bg-bottom h-screen"></div>
      </main>
    </section>
  );
};

export default Home;
