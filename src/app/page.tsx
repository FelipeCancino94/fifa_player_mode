import { neon } from '@neondatabase/serverless';
import SummarySeason from './components/SummarySeason/SummarySeason';
import GlobalStats from './components/GlobalStats/GlobalStats';

const baseUrl:string = process.env.DATABASE_URL || '';

async function getData() {
  const sql = neon(baseUrl);
  const response = await sql`SELECT * FROM stats`;
  return response;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  const actualSeason = data[data.length - 1];
  const colorPrimary= actualSeason.team_colors.split(',')[0];
  const colorSecondary= actualSeason.team_colors.split(',')[1];
  const colorTertiary= actualSeason.team_colors.split(',')[2];
  const styles = {
    backgroundColor: colorPrimary,
    color: '#fff',
  }
  return <>
    <div style={ styles }>
      <SummarySeason
        team={ actualSeason.team }
        goals={ actualSeason.goals }
        assists={ actualSeason.assists }
        games={ actualSeason.games } />
      <GlobalStats />
      {/* {
        data.map((item:any) => (
          <li key={item.id}>{item.team}</li>
        ))
      } */}
    </div>
  </>
}
