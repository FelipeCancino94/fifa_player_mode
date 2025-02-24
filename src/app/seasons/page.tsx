import { neon } from '@neondatabase/serverless';

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
  team_week: number
}

async function getData() {
  const sql = neon(baseUrl);
  const response = await sql`SELECT * FROM stats`;
  const orderedData = response.sort((a, b) => a.id - b.id);
  return orderedData;
}

export default async function Page() {
  const data = await getData();
  console.log(data);

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
    team_week: item.team_week
  }));

  const styles = {
    backgroundColor: colorPrimary,
    color: colorSecondary,
  }

  const imageUrl = (team:string) => {
    const teamUrl = team.replaceAll(' ', '-').toLowerCase();
    return `./team-${ teamUrl }.png`;
  }

  return (
    <>
      <div style={ styles } className="pt-16 px-4">
        <h3 className="text-3xl text-center py-8">Temporadas</h3>
        <div className="season-list">
          {
            statsList.map((season) => (
              <div key={ season.id } className="season">
                <div className="season-heading border-2 border-solid border-neutral-900 rounded-md py-4 px-8 mt-2 ">
                  <h4 className="text-xl flex justify-between w-full">
                    <span>{ season.season }</span>
                    <strong>+</strong>
                  </h4>
                </div>
                <div className="season-body">
                  <img className="w-24 mx-auto my-3" src={ imageUrl(season.team) } alt="Team logo" title="montpellier hsc" />
                  <p className='text-center flex justify-around'>
                    <span>{ season.goals } Goles</span>
                    <span>{ season.assists } Asistencias</span>
                    <span>{ season.games } Partidos</span>
                  </p>
                  <p>Trofeos:</p>
                  <ul>
                    {
                      season.trophies !== null ? season.trophies.split(',').map((trophie, index) => (
                        trophie ? <li key={index} className='list-disc ml-8'>{ trophie }</li> : <li key={index} className='list-disc ml-8'>Ninguno</li>
                      )) : <li className='list-disc ml-8'>Ninguno</li>
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}