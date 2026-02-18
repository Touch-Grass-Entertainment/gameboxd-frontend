// import { getTopRated } from "@/api/games";
// import { useEffect, useState } from "react";

import { Banner } from "@/components/Home";

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
        <div className='size-full flex flex-col'>
            {/* <div>
                {topGames && topGames.map(game => (
                    <div>
                        {game.name}
                    </div>
                ))}
            </div> */}
            <div>
                <Banner />
            </div>
        </div>
    )
}

export default Home;