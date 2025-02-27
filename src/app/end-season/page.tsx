import { neon } from "@neondatabase/serverless";

export default async function Page() {
    const baseUrl:string = process.env.DATABASE_URL || '';

    async function create(formData: FormData) {
        "use server";
        const sql = neon(baseUrl);
        const season = formData.get("season");
        const team = formData.get("team");
        const goals = parseInt(formData.get("goals") as string);
        const assists = parseInt(formData.get("assists") as string);
        const games = parseInt(formData.get("games") as string);
        const red_cards = parseInt(formData.get("red_cards") as string);
        const yellow_cards = parseInt(formData.get("yellow_cards") as string);
        const team_week = parseInt(formData.get("team_week") as string);
        const player_month = parseInt(formData.get("player_month") as string);
        const player_year = formData.has("player_year");
        const trophies = formData.get("trophies");
        const team_colors = formData.get("team_colors");

        await sql(`INSERT INTO stats (season, team, goals, assists, games, red_cards, yellow_cards, team_week, player_month, player_year, trophies, team_colors) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [season, team, goals, assists, games, red_cards, yellow_cards, team_week, player_month, player_year, trophies, team_colors]);
    }

    const styles:string = "py-2 px-4 mb-4 rounded-md bg-transparent border-2 border-solid border-white placeholder:text-white w-full outline-0 text-white focus:bg-white focus:text-sky-700 focus:placeholder:text-sky-700 transition-all";

    return (
        <div className="end-season p-4 bg-sky-700 min-h-screen">
            <h3 className="text-3xl text-center py-8 text-white">Finalizar temporada</h3>
            <form action={ create }>
                <div className="flex justify-between gap-4">
                    <input className={ styles } type="text" placeholder="Temporada" name="season" />
                </div>
                <div className="flex justify-between gap-4">
                    <input className={ styles } type="text" placeholder="Equipo" name="team" />
                    <input className={ styles } type="text" placeholder="Colores de equipo" name="team_colors" />
                </div>
                <div className="flex justify-between gap-4">
                    <input className={ styles } type="number" placeholder="Goles" name="goals" />
                    <input className={ styles } type="number" placeholder="Assis..." name="assists" />
                    <input className={ styles } type="number" placeholder="Parti..." name="games" />
                </div>
                <div className="flex justify-between gap-4">
                    <input className={ styles } type="number" placeholder="Rojas" name="red_cards" />
                    <input className={ styles } type="number" placeholder="Amarillas" name="yellow_cards" />
                </div>
                <div className="flex justify-between gap-4">
                    <input className={ styles } type="number" placeholder="E.sem.." name="team_week" />
                    <input className={ styles } type="number" placeholder="J. mes" name="player_month" />
                    <label className="text-white">
                        Jugador del año
                        <input className={ styles } type="checkbox"  name="player_year" />
                    </label>
                </div>
                <div className="flex justify-between gap-4">
                    <input className={ styles } type="text" placeholder="Trofeos" name="trophies" />
                </div>
                <div className="flex justify-between gap-4">
                    <button className={ `${styles} bg-white text-sky-700 uppercase font-bold hover:bg-transparent hover:text-white` } type="submit" name="send">
                        Finalizar temporada
                    </button>
                </div>
            </form>
        </div>
    )
}