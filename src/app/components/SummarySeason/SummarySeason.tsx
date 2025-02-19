interface SummarySeasonProps {
  team: string,
  assists: number,
  games: number,
  goals: number,
}


const SummarySeason: React.FC<SummarySeasonProps> = ({ team, goals, assists, games }) => {
  const teamURL = team.replaceAll(' ', '-').toLowerCase();
  return (
    <div className="summary-season flex flex-2 items-center justify-between p-8 border-b-4 border-dashed border-b-blue-800/50">
      <div>
        <img className="w-32" src={ './team-' + teamURL + '.png' } alt="Team logo" title="montpellier hsc"  />
      </div>
      <div>
        <p>
          <strong className="text-2xl">{ goals }</strong>
          <span>Goles</span>
        </p>
        <p>
          <strong className="text-2xl">{ assists }</strong>
          <span>Asistencias</span>
        </p>
        <p>
          <strong className="text-2xl">{ games }</strong>
          <span>Partidos</span>
        </p>
      </div>
    </div>
  )
}

export default SummarySeason;