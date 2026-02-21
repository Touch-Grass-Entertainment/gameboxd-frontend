import { mockGamesDataResponse } from "./mockData";

function GameCards() {
    return (
        <div className='flex flex-wrap gap-6 mt-6'>
            {mockGamesDataResponse.results.map((game, i) => (
                <div
                    key={i}
                    className='flex flex-col items-center bg-card w-48 rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 cursor-pointer'
                >
                    <img
                        src={game.background_image}
                        alt={game.name}
                        className='h-56 w-full object-cover'
                    />
                    <div className='flex flex-col w-full p-4'>
                        <span className='text-xs text-accent font-semibold tracking-wider uppercase'>{game.genres[0]?.name}</span>
                        <span className='text-base font-medium font-serif mt-2 text-foreground line-clamp-2'>{game.name}</span>
                    </div>
                </div>
            ))}
        </div>
    )
};

export { GameCards };