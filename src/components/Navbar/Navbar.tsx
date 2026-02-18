import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    const getClasses = (path: string) : string => {
        const buttonClass = location.pathname === path
        ? 'bg-accent-dim text-accent-foreground'
        : 'text-accent';
        return buttonClass;
    }

    return (
        <div className='w-full h-14 bg-card border-b border-border flex items-center justify-between'>
            <div className='font-serif text-2xl text-accent font-medium ml-6 mb-1'>
                Gameboxd
            </div>
            <div className='flex items-center gap-2 mr-6'>
                <Link to='/home'>
                    <Button
                        variant='ghost'
                        className={getClasses('/home')}
                    >
                        HOME
                    </Button>
                </Link>
                <Link to='/explore'>
                    <Button
                        variant='ghost'
                        className={getClasses('/explore')}
                    >
                        EXPLORE
                    </Button>
                </Link>
                <Link to='/profile'>
                    <Button
                        variant='ghost'
                        className={getClasses('/profile')}
                    >
                        PROFILE
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export { Navbar };