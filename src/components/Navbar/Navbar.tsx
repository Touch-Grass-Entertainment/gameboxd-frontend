import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='w-full h-14 border-b border-gray-700 flex items-center justify-between'>
            <div className='text-2xl text-amber-300 font-medium ml-6 mb-1'>
                Gameboxd
            </div>
            <div className='flex items-center gap-2 mr-6'>
                <Link to='/home'>
                    <Button variant='ghost' className='text-amber-300'>HOME</Button>
                </Link>
                <Link to='/explore'>
                    <Button variant='ghost' className='text-amber-300'>EXPLORE</Button>
                </Link>
                <Link to='/profile'>
                    <Button variant='ghost' className='text-amber-300'>PROFILE</Button>
                </Link>
            </div>
        </div>
    )
}

export { Navbar };