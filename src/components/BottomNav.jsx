import React from 'react';
import { Home, Compass, Library } from 'lucide-react';

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-14 bg-[#212121] border-t border-white/5 flex md:hidden items-center justify-around z-50">
            <a href="/" className="flex flex-col items-center gap-1 text-white opacity-90 hover:opacity-100">
                <Home size={22} />
                <span className="text-[10px]">Home</span>
            </a>
            <a href="/explore" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white">
                <Compass size={22} />
                <span className="text-[10px]">Explore</span>
            </a>
            <a href="/library" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white">
                <Library size={22} />
                <span className="text-[10px]">Library</span>
            </a>
        </div>
    );
};

export default BottomNav;
