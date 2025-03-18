interface positions {
    forwards:playerProps[],
    midfielders: playerProps[],
    defenders: playerProps[],
    goalkeepers: playerProps[]
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

const GraphicPosition:React.FC<positions> = ({ forwards, midfielders, defenders, goalkeepers }) => {
    return (
        <div className="field-positions relative">
            <img src="../../soccer-field.png" alt="image field" title="soccer field" className="invert w-64" />
            <div className="positions absolute top-0 left-0 w-full h-full flex flex-col items-center justify-around">
                <div className="por">
                    <span className="bg-[#4f46e5] text-white rounded-full py-[5px] px-[9px]">{ goalkeepers.length }</span>
                </div>
                <div className="def flex flex-row justify-center gap-x-4">
                    <span className="bg-[#f59e0b] text-white rounded-full py-[1px] px-[9px]">{ defenders.length > 0 ? defenders.filter(key => key.position === 'DFI').length : '0' }</span>
                    <span className="bg-[#f59e0b] text-white rounded-full py-[1px] px-[9px]">{ defenders.length > 0 ? defenders.filter(key => key.position === 'DFC').length / 2 : '0' }</span>
                    <span className="bg-[#f59e0b] text-white rounded-full py-[1px] px-[9px]">{ defenders.length > 0 ? defenders.filter(key => key.position === 'DFC').length / 2 : '0' }</span>
                    <span className="bg-[#f59e0b] text-white rounded-full py-[1px] px-[9px]">{ defenders.length > 0 ? defenders.filter(key => key.position === 'DFD').length : '0' }</span>
                </div>
                <div className="med">
                    <span className="bg-[#22c55e] text-white rounded-full py-[5px] px-[9px]">{ midfielders.length > 0 ? midfielders.filter(key => key.position === 'MCD').length : '0' }</span>
                </div>
                <div className="med flex flex-row justify-center gap-x-8">
                    <span className="bg-[#22c55e] text-white rounded-full py-[1px] px-[9px]">{ midfielders.length > 0 ? midfielders.filter(key => key.position === 'MI').length : '0' }</span>
                    <span className="bg-[#22c55e] text-white rounded-full py-[1px] px-[9px]">{ midfielders.length > 0 ? midfielders.filter(key => key.position === 'MD').length : '0' }</span>
                </div>
                <div className="med">
                    <span className="bg-[#22c55e] text-white rounded-full py-[5px] px-[9px]">{ midfielders.length > 0 ? midfielders.filter(key => key.position === 'MDO').length : '0' }</span>
                </div>
                <div className="del flex flex-row justify-center gap-x-8">
                    <span className="bg-[#0ea5e9] text-white rounded-full py-[1px] px-[9px]">{ forwards.length > 0 ? forwards.filter(key => key.position === 'DC').length / 2 : '0' }</span>
                    <span className="bg-[#0ea5e9] text-white rounded-full py-[1px] px-[9px]">{ forwards.length > 0 ? forwards.filter(key => key.position === 'DC').length / 2 : '0' }</span>
                </div>
            </div>
        </div>
    )
}

export default GraphicPosition;