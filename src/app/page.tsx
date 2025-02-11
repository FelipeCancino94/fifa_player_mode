import { neon } from '@neondatabase/serverless';

export default function Home() {

  interface Stats {
    id: number,
    assists: number,
    games: number,
    goals: number,
    player_month: number,
    player_week: number,
    player_year: boolean,
    red_cards: number,
    season: string,
    team: string,
    trophies: object,
    yellow_cards: number
  }

  const baseUrl:string = process.env.DATABASE_URL || '';

  async function getData() {
    const sql = neon(baseUrl);
    const response = await sql`SELECT * FROM stats`;
    return response;
  }

  const page = async () => {
    const data:any = await getData();
    console.log("tipo de dato: ");
    console.log(data);
    const result = data.map((item:any) => (
      <li key={item.id}>{item.team}</li>
    ))
    return result;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Building site ...</h1>
        <p>Site Data:</p>
        <ul>
          {page()}
        </ul>
      </main>
    </div>
  );
}
