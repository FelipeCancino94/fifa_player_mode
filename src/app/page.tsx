import { neon } from '@neondatabase/serverless';
import SummarySeason from './components/SummarySeason/SummarySeason';

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
  return <>
    <SummarySeason
      team={ actualSeason.team }
      goals={ actualSeason.goals }
      assists={ actualSeason.assists }
      games={ actualSeason.games } />
    {/* {
      data.map((item:any) => (
        <li key={item.id}>{item.team}</li>
      ))
    } */}
  </>
}
