export const fetchCache = 'force-no-store';
interface SummarySeasonProps {
  team: string,
  assists: number,
  games: number,
  goals: number,
  season: string,
}


const SummarySeason: React.FC<SummarySeasonProps> = ({ team, goals, assists, games, season }) => {
  const teamURL = team.replaceAll(' ', '-').toLowerCase();
  return (
    <div className="summary-season flex flex-2 items-center justify-between p-4 border-b-4 border-dashed border-b-neutral-900/40 pt-16">
      <div>
        <img className="w-32" src={ './team-' + teamURL + '.png' } alt="Team logo" title="montpellier hsc"  />
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