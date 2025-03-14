import { neon } from '@neondatabase/serverless';
import SummarySeason from '../../components/SummarySeason/SummarySeason';
import GlobalStats from '../../components/GlobalStats/GlobalStats';

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

export default async function Home() {
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

  return <>
    <div style={ styles } className='h-screen'>
      <SummarySeason
        team={ actualSeason.team }
        goals={ actualSeason.goals }
        assists={ actualSeason.assists }
        games={ actualSeason.games }
        season={ actualSeason.season }
        image={ actualSeason.image_team } />
      <GlobalStats stats={ statsList }/>
    </div>
  </>
}
