export default function Page() {
  return (
    <div className="manager-mode p-16 h-screen bg-gradient-to-r from-red-950 to-red-700">
      <div className="grid grid-cols-6 justify-center items-center text-white">
        <div className="item py-8 px-2">
          <p className="flex justify-between items-start text-right">
            <strong className="text-5xl">1 </strong> 
            <span>Temporadas</span>
          </p>
          <small>2024-2025</small>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-between items-start text-right">
            <strong className="text-5xl">7 </strong>
            <span>UEFA Champions League</span>
          </p>
          <small>+ 0</small>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-between items-start text-right">
            <strong className="text-5xl">19 </strong>
            <span>Serie A</span>
          </p>
          <small>+ 0</small>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-between items-start text-right">
            <strong className="text-5xl">5 </strong>
            <span>Copa de Italia</span>
          </p>
          <small>+ 0</small>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-between items-start text-right">
            <strong className="text-5xl">8 </strong>
            <span>Supercopa de Italia</span>
          </p>
          <small>+ 0</small>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-between items-start text-right">
            <strong className="text-5xl">5 </strong>
            <span>Supercopa UEFA</span>
          </p>
          <small>+ 0</small>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-center text-white">
        <div className="item py-8 px-2">
          <p className="flex justify-center items-start text-center">
            <strong className="text-5xl">+78</strong>
            <span>Goles</span>
          </p>
          <small className="text-center block"><strong>+30</strong> Asistencias</small>
        </div>
        <div className="item py-8 px-2">
          <img src="../milan-logo.png" alt="team logo image" title="milan logo" width="50%" className="mx-auto" />
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-center items-start text-center">
            <strong className="text-5xl">-40</strong>
            <span>Goles</span>
          </p>
          <p className="text-center">
            <small><strong>10</strong> Tarjetas amarillas</small>
            <small className="ml-4"><strong>4</strong> Tarjetas rojas</small>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center items-center text-white">
        <div className="item py-8 px-2">
          <p className="flex justify-center gap-4 items-start text-right">
            <strong className="text-5xl">50 </strong> 
            <span>Partidos jugados</span>
          </p>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-center gap-4 items-start text-right">
            <strong className="text-5xl">30 </strong> 
            <span>Victorias</span>
          </p>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-center gap-4 items-start text-right">
            <strong className="text-5xl">10 </strong> 
            <span>Empates</span>
          </p>
        </div>
        <div className="item py-8 px-2">
          <p className="flex justify-center gap-4 items-start text-right">
            <strong className="text-5xl">10 </strong> 
            <span>Derrotas</span>
          </p>
        </div>
      </div>
    </div>
  )
}