import { Dot } from "lucide-react";

function Banner() {
    return (
        <div className='flex flex-col gap-4'>
            <span className='flex text-sm font-medium text-accent'>
                TRACK <Dot className='mt-0.5' size={16} /> RATE <Dot className='mt-0.5' size={16} /> DISCOVER
            </span>
            <span className='text-6xl font-serif'>
                Your gaming life, <span className='text-accent'>catalogued.</span>
            </span>
            <span className='text-sm text-muted'>
                Log every game you've played. Rate them, review them, and see 
                what others think.
            </span>
        </div>
    )
}

export { Banner };