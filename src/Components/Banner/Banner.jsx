export default function Banner() {
  return (
    <section className="bg-zinc-400 mb-6 h-80 flex relative rounded-2xl p-8 bg-[url('src/assets/img/bannerSoccer.svg')] bg-no-repeat bg-cover bg-center">
      <div className="text-white w-2/4 h-full flex items-start justify-center flex-col gap-4">
        <h1 className="text-2xl font-medium">Placares em Tempo Real</h1>
        <span className="w-3/4">
          Tenha acesso instantâneo aos placares ao vivo dos seus esportes
          favoritos. Seja a empolgante emoção do futebol ou a ação eletrizante
          do basquete, nunca perca um momento do jogo. Mantenha-se atualizado
          com atualizações em tempo real, destaques das partidas e estatísticas
          dos jogos.
        </span>
      </div>
      <div className="w-2/4 h-full flex items-center justify-end gap-4">
        <div className="w-2/3 bg-chumbo shadow-boxShadow p-6 rounded-2xl flex flex-col items-center justify-center gap-4">
          <h2 className="text-white text-center text-2xl font-medium">
            Passando Agora
          </h2>
          <div className="flex items-center justify-center gap-6">
            <img src="" alt="" />
            <span className="text-white text-[2rem] font-bold">3 x 0</span>
            <img src="" alt="" />
          </div>
          <p className="text-white font-medium text-base">60:00</p>
        </div>
      </div>
    </section>
  );
}
