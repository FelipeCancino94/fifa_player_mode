interface PlayersTableProps {
    data: playerProps[];
}

interface playerProps {
    id:number,
    name:string,
    area: string,
    position:string,
    games:number,
    wins:number,
    draws:number,
    loses:number,
    goals:number,
    assists:number,
    clean_sheets:number,
    yellow_cards:number,
    red_cards:number,
    seasons:number,
    youth_player:boolean,
    potential:string,
    sold:boolean
}

function getPositionColor(area:string) {
    if (area === 'POR') {
        return {borderColor: 'rgb(79, 70, 229)'};
    } else if (area === 'DEF') {
        return {borderColor: 'rgb(245, 158, 11)'};
    } else if (area === 'MED') {
        return {borderColor: 'rgb(34, 197, 94)'};
    } else if (area === 'DEL') {
        return {borderColor: 'rgb(14, 165, 233)'};
    } else {
        return {borderColor: 'rgb(255, 255, 255)'};
    }
}

const PlayersTable:React.FC<PlayersTableProps> = ({ data }) => {
    return <>
        <div className="player-list w-full">
            <div className="player-positions-count flex justify-between item-center">
                <div className="position flex justify-around items-center px-4">
                    <p className="position-count rounded-full px-[10px] mr-4 text-3xl bg-sky-500">
                        5
                    </p>
                    <p className="position-name">
                        Delanteros
                    </p>
                </div>
                <div className="position flex justify-around items-center px-4">
                    <p className="position-count rounded-full px-[10px] mr-4 text-3xl bg-green-500">
                        7
                    </p>
                    <p className="position-name">
                        Mediocampistas
                    </p>
                </div>
                <div className="position flex justify-around items-center px-4">
                    <p className="position-count rounded-full px-[10px] mr-4 text-3xl bg-amber-500">
                        7
                    </p>
                    <p className="position-name">
                        Defensas
                    </p>
                </div>
                <div className="position flex justify-around items-center px-4">
                    <p className="position-count rounded-full px-[10px] mr-4 text-3xl bg-indigo-600">
                        3
                    </p>
                    <p className="position-name">
                        Porteros
                    </p>
                </div>
            </div>
            <div className="player-table mt-4">
                <div className="row grid py-2 border-l-8 border-neutral-50">
                    <div className='text-left pl-4'>Nombre</div>
                    <div className='text-center'>POS</div>
                    <div className='text-center'>PJ</div>
                    <div className='text-center'>V</div>
                    <div className='text-center'>E</div>
                    <div className='text-center'>D</div>
                    <div className='text-center'>G</div>
                    <div className='text-center'>A</div>
                    <div className='text-center'>PI</div>
                    <div className='text-center'>TA</div>
                    <div className='text-center'>TR</div>
                    <div className='text-center'>T</div>
                </div>
                {
                    data.map((player:playerProps) => (
                        <div className={`row grid py-2 border-l-8`} key={ player.id } style={ getPositionColor(player.area) }>
                            <div className='text-left pl-4'>{ player.name }</div>
                            <div className='text-center'>{ player.position }</div>
                            <div className='text-center'>{ player.games }</div>
                            <div className='text-center'>{ player.wins }</div>
                            <div className='text-center'>{ player.draws }</div>
                            <div className='text-center'>{ player.loses }</div>
                            <div className='text-center'>{ player.goals }</div>
                            <div className='text-center'>{ player.assists }</div>
                            <div className='text-center'>{ player.clean_sheets }</div>
                            <div className='text-center'>{ player.yellow_cards }</div>
                            <div className='text-center'>{ player.red_cards }</div>
                            <div className='text-center'>{ player.seasons }</div>
                        </div>                  
                    ))
                }
            </div>
        </div>
    </>
}
export default PlayersTable;