"use client"
import { useState } from "react";
import SaveSeason from "../components/SaveSeason/SaveSeason";
import Link from "next/link";

export default function Page() {
    const [stateForm, setStateForm] = useState<boolean>(false);

    const sendForm = (formData: FormData) => {
        SaveSeason(formData)
            .then((response) => {
                if (response) {
                    setStateForm(true);
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    const styles:string = "py-2 px-4 mb-4 rounded-md bg-transparent border-2 border-solid border-white placeholder:text-white w-full outline-0 text-white focus:bg-white focus:text-sky-700 focus:placeholder:text-sky-700 transition-all";

    return (
        <div className="end-season p-4 bg-sky-700 min-h-screen">
            <h3 className="text-3xl text-center py-8 text-white">Finalizar temporada</h3>
            <form action={ sendForm } className={`form ${!stateForm ? 'block' : 'hidden'}`}>
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
                    <input className={ styles } type="file" placeholder="Imagen de equipo" name="image_team" accept="image/png, image/jpeg" />
                </div>
                <div className="flex justify-between gap-4">
                    <button className={ `${styles} bg-white !text-sky-700 uppercase font-bold hover:bg-transparent hover:!text-white` } type="submit" name="send">
                        Finalizar temporada
                    </button>
                </div>
            </form>
            <div className={`message ${stateForm ? 'block' : 'hidden'}`}>
                <div className="content-message bg-white p-8 rounded-md">
                    <h2 className="text-3xl text-center text-sky-700">Guardado !</h2>
                    <p className="text-lg text-center text-sky-700 leading-none mt-4 mb-8">La temporada ha sido registrada éxitosamente.</p>
                    <Link href="/" className="p-4 bg-sky-700 rounded-md text-white mx-auto block text-center border-2 border-solid border-sky-700 hover:text-sky-700 hover:bg-white transition-all">Ir a la página de inicio</Link>
                </div>
            </div>
        </div>
    )
}