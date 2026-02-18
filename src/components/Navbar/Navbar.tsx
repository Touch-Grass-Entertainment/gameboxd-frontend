import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className='w-full h-14 bg-card border-b border-border flex items-center justify-between'>
            <div className='font-serif text-2xl text-accent font-medium ml-6 mb-1'>
                Gameboxd
            </div>
            <div className='flex items-center gap-2 mr-6'>
                <Link to='/home'>
                    <Button
                        variant='ghost'
                        className={`${isActive('/home') ? 'bg-accent-dim text-accent-foreground' : 'text-accent'}`}
                    >
                        HOME
                    </Button>
                </Link>
                <Link to='/explore'>
                    <Button
                        variant='ghost'
                        className={`${isActive('/explore') ? 'bg-accent-dim text-accent-foreground' : 'text-accent'}`}
                    >
                        EXPLORE
                    </Button>
                </Link>
                <Link to='/profile'>
                    <Button
                        variant='ghost'
                        className={`${isActive('/profile') ? 'bg-accent-dim text-accent-foreground' : 'text-accent'}`}
                    >
                        PROFILE
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export { Navbar };