import { useState } from 'react';
import { Dot } from 'lucide-react';
import { mockGamesDataResponse } from './mockData';
import type { GamesResponse } from '../../types/games';

function TopRated() {
    const [games, setGames] = useState<GamesResponse>(mockGamesDataResponse);
    return (
        <div className='flex flex-col mt-10'>
            <div className='flex items-center gap-2'>
                <span className='text-sm text-muted'>TOP RATED</span>
                <div className='flex-1 h-px bg-border' />
            </div>
            <div className='flex flex-col gap-4 mt-2'>
                {games.results.map((game, i) => (
                    <div key={i} className='flex w-full gap-6 items-center bg-popover rounded-md py-4 px-6'>
                        <span className='text-lg font-serif text-muted'>{i + 1}</span>
                        <img src={game.background_image} alt='game' className='size-14 rounded-md' />
                        <div className='flex flex-col'>
                            <span className='text-md font-serif'>{game.name}</span>
                            <span className='flex items-center text-secondary text-sm'>
                                {game.released.split('-')[0]} <Dot className='mt-0.5' size={16} /> {game.genres[0].name}
                            </span>
                        </div>
                        <span className='font-serif text-accent ml-auto'>
                            Metacritic - {game.metacritic}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export { TopRated };