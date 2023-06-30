import CardTempoReal from "../CardTempoReal/CardTempoReal";

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
        <CardTempoReal />
      </div>
    </section>
  );
}
