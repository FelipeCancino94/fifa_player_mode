"use server"
import { neon } from "@neondatabase/serverless";

export default async function SaveSeason(formData: FormData) {
    const baseUrl:string = process.env.DATABASE_URL || '';

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

    try {
        await sql(`INSERT INTO stats (season, team, goals, assists, games, red_cards, yellow_cards, team_week, player_month, player_year, trophies, team_colors) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [season, team, goals, assists, games, red_cards, yellow_cards, team_week, player_month, player_year, trophies, team_colors]);
        return true;
    } catch(error:any) {
        console.error(error.message);
        return false;
    }
}