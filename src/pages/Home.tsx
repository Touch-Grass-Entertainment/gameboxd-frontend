// import { getTopRated } from "@/api/games";
// import { useEffect, useState } from "react";

import { Banner, GameCards, TopRated } from "@/components/Home";

function Home() {
    // const [topGames, setTopGames] = useState([]);
    // useEffect(() => {
    //     const fetchGames = async () => {
    //         const response = await getTopRated();
    //         setTopGames(response.results);
    //         console.log(topGames)
    //     }
    //     fetchGames();
    // }, [])
    return (
        <div className='size-full flex flex-col px-10 py-15'>
            {/* <div>
                {topGames && topGames.map(game => (
                    <div>
                        {game.name}
                    </div>
                ))}
            </div> */}
            <div className='flex flex-col'>
                <Banner />
                <div className='flex flex-col mt-10'>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm text-muted tracking-widest'>POPULAR RIGHT NOW</span>
                        <div className='flex-1 h-px bg-border' />
                    </div>
                </div>
                <GameCards />
                <TopRated />
            </div>
        </div>
    )
}

export default Home;