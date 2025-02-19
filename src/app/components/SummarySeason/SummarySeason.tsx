interface SummarySeasonProps {
  assists: number,
  games: number,
  goals: number,
}

const SummarySeason: React.FC<SummarySeasonProps> = ({ goals, assists, games }) => {
  return (
    <div className="summary-season flex flex-2 items-center">
      <div>
        <img src="./Montpellier_HSC.png" alt="Team logo" title="montpellier hsc" />
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