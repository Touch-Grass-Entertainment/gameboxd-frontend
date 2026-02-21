import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { mockGenresData } from "../Home/mockData";
import type { Genre } from "@/types/genres";

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    return (
        <div className='flex flex-col w-full'>
            <h1 className='font-serif text-3xl'>Explore Games and People</h1>
            <div className='flex items-center gap-4 mt-5'>
                <Input placeholder="Search for games, genres, platforms..." className="w-full"
                    value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                />
                <Button>Search</Button>
            </div>
            <div className='flex items-center gap-4 mt-5'>
                {mockGenresData.map((genre, i) => (
                    <Button
                        key={i}
                        variant={selectedGenre?.id === genre.id ? 'default' : 'outline'}
                        onClick={() => setSelectedGenre(genre)}
                    >
                        {genre.name}
                    </Button>
                ))}
            </div>
            <div className='flex items-center gap-2 mt-5'>
                <span className='text-sm text-muted tracking-widest'>
                    {searchQuery || selectedGenre ? 'RESULTS' : 'POPULAR GAMES'}
                </span>
                <div className='flex-1 h-px bg-border' />
            </div>
        </div>
    )
};

export { Search };