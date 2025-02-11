import { neon } from '@neondatabase/serverless';

export default function getData() {

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

  const getInfo = async (): Promise<Stats[]> => {
    try {
      const sql = neon(baseUrl);
      const response = await sql<Stats []>`SELECT * FROM stats`;
      return response;
    } catch (error) {
      console.error('Error al obtener los datos de la base de datos:', error);
      return [];
    }
  };

  const StatsList = async () => {
    const data = await getInfo();

    if (data.length === 0) {
      return <p>No se encontraron datos.</p>
    }

    return (
      <ul>
        {
          data.map((item:any) => (
            <li key={item.id}>{item.team}</li>
          ))
        }
      </ul>
    )
  }
}