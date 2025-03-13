import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SportsIcon from '@mui/icons-material/Sports';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function Page() {
  return (
    <div className="manager-mode p-16 h-screen bg-gradient-to-r from-red-950 to-red-700">
      <div className="flex items-center justify-between">
        <img src="../milan-logo.png" alt="team logo image" title="milan logo" width="20%" className="mx-auto" />
        <div className="grid grid-cols-4 gap-4 p-4 justify-center items-center text-white">
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">1 </strong> 
              <span className="block text-center">Temporadas</span>
            </p>
            <small className="block text-center">2024-2025</small>
            <CalendarMonthIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">7 </strong>
              <span className="block text-center">UEFA Champions League</span>
            </p>
            <small className="block text-center">+ 0</small>
            <EmojiEventsIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">19 </strong>
              <span className="block text-center">Serie A</span>
            </p>
            <small className="block text-center">+ 0</small>
            <MilitaryTechIcon className='absolute top-8 -left-12 opacity-10 !w-48 !h-48' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">5 </strong>
              <span className="block text-center">Copa de Italia</span>
            </p>
            <small className="block text-center">+ 0</small>
            <RadioButtonCheckedIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">8 </strong>
              <span className="block text-center">Supercopa de Italia</span>
            </p>
            <small className="block text-center">+ 0</small>
            <EmojiEventsIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">5 </strong>
              <span className="block text-center">Supercopa UEFA</span>
            </p>
            <small className="block text-center">+ 0</small>
            <EmojiEventsIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">+78</strong>
              <span className="block text-center">Goles</span>
            </p>
            <SportsSoccerIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">+30</strong>
              <span className="block text-center">Asistencias</span>
            </p>
            <RollerSkatingIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">-40</strong>
              <span className="block text-center">Goles recibidos</span>
            </p>
            <SportsSoccerIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">10</strong>
              <span className="block text-center">Tarjetas amarillas</span>
            </p>
            <CropPortraitIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p className="text-center">
              <strong className="text-5xl block text-center">5</strong>
              <span className="block text-center">Tarjetas rojas</span>
            </p>
            <BookmarkIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p>
              <strong className="text-5xl block text-center">50 </strong> 
              <span className="block text-center">Partidos jugados</span>
            </p>
            <SportsIcon className='absolute top-5 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p>
              <strong className="text-5xl block text-center">30 </strong> 
              <span className="block text-center">Victorias</span>
            </p>
            <CheckCircleOutlineIcon className='absolute top-0 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p>
              <strong className="text-5xl block text-center">10 </strong> 
              <span className="block text-center">Empates</span>
            </p>
            <RemoveCircleOutlineIcon className='absolute top-0 -left-8 opacity-10 !w-40 !h-40' />
          </div>
          <div className="item relative overflow-hidden p-4 rounded-md bg-neutral-950/25 h-full">
            <p>
              <strong className="text-5xl block text-center">10 </strong> 
              <span className="block text-center">Derrotas</span>
            </p>
            <CancelIcon className='absolute top-0 -left-8 opacity-10 !w-40 !h-40' />
          </div>
        </div>
      </div>
    </div>
  )
}