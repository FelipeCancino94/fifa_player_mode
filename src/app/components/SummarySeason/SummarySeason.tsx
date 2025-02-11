export default function SummarySeason() {
  return (
    <div className="summary-season flex flex-2 items-center">
      <div>
        <img src="./Toronto-logo.png" alt="Team logo" title="toronto fc" />
      </div>
      <div>
        <p>
          <strong className="text-2xl">40</strong>
          <span>Goles</span>
        </p>
        <p>
          <strong className="text-2xl">10</strong>
          <span>Asistencias</span>
        </p>
        <p>
          <strong className="text-2xl">38</strong>
          <span>Partidos</span>
        </p>
      </div>
    </div>
  )
}