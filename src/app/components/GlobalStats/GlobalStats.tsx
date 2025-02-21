interface GlobalStatsProps {
    stats: StatsProps[];
}

interface StatsProps {
    assists: number,
    games: number,
    goals: number,
    id: number,
    player_month: number,
    player_year: boolean,
    red_cards: number,
    season: string,
    team: string,
    team_colors: string,
    trophies: string,
    yellow_cards: number,
    team_week: number
}


const GlobalStats: React.FC<GlobalStatsProps> = ({ stats }) => {
    const sumStats = (key: keyof typeof stats[0]): number => {
        return stats.reduce((sum, season) => {
            const value = season[key];
            return sum + (typeof value === 'number' ? value : 0);
        }, 0);
    };
    
    const allGoals: number = sumStats('goals');
    const allAssists: number = sumStats('assists');
    const allGames: number = sumStats('games');
    const allRedCards: number = sumStats('red_cards');
    const allYellowCards: number = sumStats('yellow_cards');
    const teamOfTheWeek: number = sumStats('team_week');
    const playerMonth: number = sumStats('player_month');

    const sumTrophies:number = (() => {
        let trophiesLength:number = 0;
        stats.forEach((item) => {
            if (item.trophies !== null) {
                const list = item.trophies.split(',');
                trophiesLength += list.length;
            }
        })
        return trophiesLength;
    })();

    const sumPlayerOfTheYear: number = (() => {
        let playerOfTheYearLength = 0;
        stats.forEach((item) => {
            if (item.player_year) {
                playerOfTheYearLength += 1
            }
        });
        return playerOfTheYearLength;
    })();

    return (
        <div className="global-states">
            <h3 className="text-3xl text-center py-8">Estadisticas globales</h3>
            <div className="stats grid grid-cols-3 gap-4 px-4">
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ allGoals }</h4>
                    <p className="item-stat-label text-center leading-none">Goles</p>
                    <small className="text-center block">media: { (allGoals / allGames).toFixed(2) }</small>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ allAssists }</h4>
                    <p className="item-stat-label text-center leading-none">Asistencias</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ allGames }</h4>
                    <p className="item-stat-label text-center leading-none">Partidos</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ sumTrophies }</h4>
                    <p className="item-stat-label text-center leading-none">Trofeos</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ allRedCards }</h4>
                    <p className="item-stat-label text-center leading-none">Tarjetas rojas</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ allYellowCards }</h4>
                    <p className="item-stat-label text-center leading-none">Tarjetas amarillas</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ teamOfTheWeek }</h4>
                    <p className="item-stat-label text-center leading-none">Equipo de la semana</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ playerMonth }</h4>
                    <p className="item-stat-label text-center leading-none">Jugador del mes</p>
                </div>
                <div className="item-stat p-4 bg-neutral-900/30 rounded-md">
                    <h4 className="item-stat-value text-center text-4xl">{ sumPlayerOfTheYear }</h4>
                    <p className="item-stat-label text-center leading-none">Jugador del año</p>
                </div>
            </div>
        </div>
    )
}

export default GlobalStats;