const GlobalStats = () => {
    return (
        <div className="global-states">
            <h3 className="text-3xl text-center py-8">Estadisticas globales</h3>
            <div className="stats grid grid-cols-3 gap-4">
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Goles</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Asistencias</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Partidos</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Trofeos</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Tarjetas rojas</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Tarjetas amarillas</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Equipo de la semana</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Jugador del mes</p>
                </div>
                <div className="item-stat p-4">
                    <h4 className="item-stat-value text-center">0</h4>
                    <p className="item-stat-label text-center">Jugador del año</p>
                </div>
            </div>
        </div>
    )
}

export default GlobalStats;