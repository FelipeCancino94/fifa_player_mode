interface SummarySeasonProps {
  team: string,
  assists: number,
  games: number,
  goals: number,
  season: string,
  image: string
}


const SummarySeason: React.FC<SummarySeasonProps> = ({ goals, assists, games, season, image }) => {
  return (
    <div className="summary-season flex flex-2 items-center justify-between p-4 border-b-4 border-dashed border-b-neutral-900/40 pt-16">
      <div>
        <img className="w-32" src={ image } alt="Team logo" title="montpellier hsc"  />
      </div>
      <div className="w-40">
        <p className="flex justify-between items-end">
          <strong className="text-4xl">{ goals }</strong>
          <span>Goles</span>
        </p>
        <p className="flex justify-between items-end">
          <strong className="text-4xl">{ assists }</strong>
          <span>Asistencias</span>
        </p>
        <p className="flex justify-between items-end">
          <strong className="text-4xl">{ games }</strong>
          <span>Partidos</span>
        </p>
        <p className="flex justify-between items-end">
          <strong className="text-l">{ season }</strong>
          <span>Temporada</span>
        </p>
      </div>
    </div>
  )
}

export default SummarySeason;