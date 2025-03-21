import { neon } from "@neondatabase/serverless";
import PlayersTable from "@/app/components/PlayersTable/PlayersTable";
import GraphicPosition from "@/app/components/GraphicPosition/GraphicPosition";
import './PlayerStats.css';

const baseUrl:string = process.env.DATABASE_URL || '';

interface playerProps {
    id:number,
    name:string,
    area: string,
    position:string,
    games:number,
    wins:number,
    draws:number,
    loses:number,
    goals:number,
    assists:number,
    clean_sheets:number,
    yellow_cards:number,
    red_cards:number,
    seasons:number,
    youth_player:boolean,
    potential:string,
    sold:boolean
}

async function getData() {
    const sql = neon(baseUrl);
    const response = await sql`SELECT * FROM players`;
    return response;
}

export default async function Page() {
    const data = await getData();

    const playerList:playerProps[] = data.map(player => ({
        id: player.id,
        name: player.name,
        area: player.area,
        position: player.position,
        games: player.games,
        wins: player.wins,
        draws: player.draws,
        loses: player.loses,
        goals: player.goals,
        assists: player.assists,
        clean_sheets: player.clean_sheets,
        yellow_cards: player.yellow_cards,
        red_cards: player.red_cards,
        seasons: player.seasons,
        youth_player: player.youth_player,
        potential: player.potential,
        sold: player.sold
    }));

    const forwards:playerProps[] = playerList.filter(key => key.area === 'DEL' && !key.sold);
    const midfielders:playerProps[] = playerList.filter(key => key.area === 'MED' && !key.sold);
    const defenders:playerProps[] = playerList.filter(key => key.area === 'DEF' && !key.sold);
    const goalkeepers:playerProps[] = playerList.filter(key => key.area === 'POR' && !key.sold);

    return(
        <div className="player-stats p-16 h-screen bg-gradient-to-r from-red-950 to-red-700 text-neutral-50 flex justify-between items-start gap-4">
            <GraphicPosition forwards={forwards} midfielders={midfielders} defenders={defenders} goalkeepers={goalkeepers} />
            <PlayersTable data={ playerList } />
        </div>
    )
}