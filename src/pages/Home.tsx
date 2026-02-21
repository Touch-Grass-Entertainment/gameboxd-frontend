// import { getTopRated } from "@/api/games";
// import { useEffect, useState } from "react";

import { Banner, PopularGames, TopRated } from "@/components/Home";

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
                <PopularGames />
                <TopRated />
            </div>
        </div>
    )
}

export default Home;