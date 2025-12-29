import React from 'react';
import { Home, Compass, Library, Music2 } from 'lucide-react';

const Sidebar = () => {
    return (
        <div class="w-20 md:w-64 h-full bg-youtube-base flex flex-col items-center md:items-start pt-4 border-r border-white/10">
            <div class="px-6 mb-8 hidden md:flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <Music2 size={20} color="white" />
                </div>
                <span class="text-xl font-bold tracking-tight text-white">MusicTube</span>
            </div>

            <nav class="flex flex-col gap-2 w-full px-2">
                <a href="/" class="flex items-center gap-4 px-4 py-3 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors">
                    <Home size={24} />
                    <span class="hidden md:block">Home</span>
                </a>
                <a href="/explore" class="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                    <Compass size={24} />
                    <span class="hidden md:block">Explore</span>
                </a>
                <a href="/library" class="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                    <Library size={24} />
                    <span class="hidden md:block">Library</span>
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
