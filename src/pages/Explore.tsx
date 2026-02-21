import { Search } from "@/components/Explore";
import { GameCards } from "@/components/Home";

function Explore() {
    return (
        <div className='size-full flex flex-col p-8'>
            <Search />
            <GameCards />
        </div>
    )
}

export default Explore;