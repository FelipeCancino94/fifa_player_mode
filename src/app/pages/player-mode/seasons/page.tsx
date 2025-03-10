import { neon } from '@neondatabase/serverless';
import './page.css';

const baseUrl:string = process.env.DATABASE_URL || '';

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
  team_week: number,
  image_team: string
}

async function getData() {
  const sql = neon(baseUrl);
  const response = await sql`SELECT * FROM stats`;
  const orderedData = response.sort((a, b) => a.id - b.id);
  return orderedData;
}

export default async function Page() {
  const data = await getData();

  const actualSeason = data[data.length - 1];
  const colorPrimary:string = actualSeason.team_colors.split(',')[0];
  const colorSecondary:string = actualSeason.team_colors.split(',')[1];

  const statsList: StatsProps[] = data.map(item => ({
    assists: item.assists,
    games: item.games,
    goals: item.goals,
    id: item.id,
    player_month: item.player_month,
    player_year: item.player_year,
    red_cards: item.red_cards,
    season: item.season,
    team: item.team,
    team_colors: item.team_colors,
    trophies: item.trophies,
    yellow_cards: item.yellow_cards,
    team_week: item.team_week,
    image_team: item.image_team
  }));

  const styles = {
    backgroundColor: colorPrimary,
    color: colorSecondary,
  }

  return (
    <>
      <div style={ styles } className="pt-16 px-4 min-h-screen">
        <h3 className="text-3xl text-center py-8">Temporadas</h3>
        <div className="season-list">
          {
            statsList.map((season) => (
              <details key={ season.id } className="season">
                <summary className="season-heading bg-neutral-950 rounded-md py-4 px-8 mt-2 relative overflow-hidden">
                  <img className="season-heading-logo" src={ season.image_team } alt="Team logo" title={ season.team } />
                  <h4 className="text-xl flex justify-between w-full pl-32">
                    <span className='text-neutral-50'>{ season.season }</span>
                    <strong></strong>
                  </h4>
                </summary>
                <div style={{ background: season.team_colors.split(',')[0], color: season.team_colors.split(',')[1] }} className="season-body -mt-[20px] transition-all rounded-b-md">
                  <img className="w-24 mx-auto pt-4 mt-4 mb-3" src={ season.image_team } alt="Team logo" title={ season.team } />
                  <p className='text-center flex justify-between py-2 px-4 bg-neutral-900/10'>
                    <span>{ season.goals } Goles</span>
                    <span>{ season.assists } Asistencias</span>
                    <span>{ season.games } Partidos</span>
                  </p>
                  <p className='py-2 px-4'>Trofeos: ({ season.trophies !== null ? season.trophies.split(',').length : 0 })</p>
                  <ul className='px-4'>
                    {
                      season.trophies !== null ? season.trophies.split(',').map((trophie, index) => (
                        trophie ? <li key={index} className='list-disc ml-8'>{ trophie }</li> : <li key={index} className='list-disc ml-8'>Ninguno</li>
                      )) : <li className='list-disc ml-8'>Ninguno</li>
                    }
                  </ul>
                  <div className="more-info">
                    <p className='text-center flex justify-between py-2 bg-neutral-900/10 px-4'>
                      <span>Amarillas: { season.yellow_cards }</span>
                      <span>Rojas: { season.red_cards }</span>
                    </p>
                    <p className='flex justify-between py-2 px-4 pb-4'>
                      <span className='text-left'>Equipo de la semana: { season.team_week }</span>
                      <span className='text-center'>Jugador del mes: { season.player_month }</span>
                      <span className='text-right'>Jugador del año: { season.player_year ? 'SI' : 'NO' }</span>
                    </p>
                  </div>
                </div>
              </details>
            ))
          }
        </div>
      </div>
    </>
  )
}